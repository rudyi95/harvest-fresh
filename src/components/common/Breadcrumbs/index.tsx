import { Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ICBreadcrumbs {
  page: string;
}

const CBreadcrumbs = ({ page }: ICBreadcrumbs) => {
  return (
    <Container maxWidth="lg">
      <Breadcrumbs separator="›">
        <Link component={RouterLink} to="/" underline="hover">
          <Typography variant="body1">Home</Typography>
        </Link>

        <Typography variant="body1">{page}</Typography>
      </Breadcrumbs>
    </Container>
  );
};

export { CBreadcrumbs };
