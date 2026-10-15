import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const NotFound = () => {
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
        <SearchOffRoundedIcon
          sx={{
            fontSize: 80,
            color: "success.main",
            mb: 2,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", md: "9rem" },
            fontWeight: 800,
            color: "success.main",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 2,
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Oops! The page you're looking for doesn't exist or may have been moved.
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="success"
          size="large"
          startIcon={<HomeRoundedIcon />}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
