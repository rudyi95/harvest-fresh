import { Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ICBreadcrumbs {
  page: string;
}

const CBreadcrumbs = ({ page }: ICBreadcrumbs) => {
  return (
    <Container maxWidth="lg">
      <Breadcrumbs separator="›">
        <Link component={RouterLink} to="/" underline="hover" color="inherit" sx={{ fontSize: 14 }}>
          Home
        </Link>

        <Typography
          sx={{
            fontSize: 14,
            color: "#999",
          }}
        >
          {page}
        </Typography>
      </Breadcrumbs>
    </Container>
  );
};

export { CBreadcrumbs };
