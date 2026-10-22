import type React from "react";
import { Box, Container, Typography } from "@mui/material";

import { container, root } from "./style";

const HeroSection: React.FC = () => {
  return (
    <Box component="section" sx={root}>
      <Container maxWidth="lg" sx={container}>
        <Typography variant="h1">Your Neighborhood Market for All Things Fresh</Typography>
        <Typography variant="p">A place where shopping becomes a moment to enjoy</Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
