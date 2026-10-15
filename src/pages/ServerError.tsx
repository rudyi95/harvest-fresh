import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const ServerError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 520 }}>
        <ErrorOutlineRoundedIcon
          sx={{
            fontSize: 80,
            color: "error.main",
            mb: 2,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", md: "9rem" },
            fontWeight: 800,
            color: "error.main",
            lineHeight: 1,
          }}
        >
          500
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 2,
            mb: 2,
          }}
        >
          Internal Server Error
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Something went wrong on our side. Please try again in a few moments.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<RefreshRoundedIcon />}
            onClick={handleRefresh}
            sx={{
              borderRadius: 3,
              px: 3,
              textTransform: "none",
            }}
          >
            Try Again
          </Button>

          <Button
            component={RouterLink}
            to="/"
            variant="outlined"
            color="success"
            size="large"
            startIcon={<HomeRoundedIcon />}
            sx={{
              borderRadius: 3,
              px: 3,
              textTransform: "none",
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServerError;
