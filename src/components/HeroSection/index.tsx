import { Box, Container, Typography } from "@mui/material";

import heroBg from "../../assets/hero_bg.jpg";

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: "550px",
          sm: "650px",
          md: "750px",
        },
        backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.35),
                        rgba(0, 0, 0, 0.35)
                    ),
                    url("${heroBg}")
                `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        textAlign: "center",
        overflow: "hidden",
        px: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
              md: "3.5rem",
              lg: "4rem",
            },
            lineHeight: 1.2,
            mb: 3,
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          Your Neighborhood Market for All Things Fresh
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "#fff",
            fontWeight: 400,
            fontSize: {
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2rem",
            },
            lineHeight: 1.5,
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          A place where shopping becomes a moment to enjoy
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
