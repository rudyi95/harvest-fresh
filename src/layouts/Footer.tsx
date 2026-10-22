import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#292929",
        color: "#fff",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body1">
            © {new Date().getFullYear()} XO Deli. All Rights Reserved.
          </Typography>

          <Typography variant="body1">Design & Development By: Nazar Rudyi</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
