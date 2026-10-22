import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import shawarmaImage from "src/assets/chefSlicingShawarma.png";
import { container, img, root, textBlock } from "./style";

const ShawarmaSection = () => {
  return (
    <Box component="section" sx={root}>
      <Container maxWidth="lg" sx={container}>
        <Box sx={textBlock}>
          <Typography variant="h2">Sink your teeth into something special.</Typography>

          <Typography variant="body1">
            Our shawarma is slow-roasted daily, seasoned with authentic spices, and carved to order
            for unbeatable flavor and tenderness. From wraps to plates, every bite is a savory
            celebration.
          </Typography>
        </Box>

        <Box component="img" src={shawarmaImage} alt="Chef preparing fresh shawarma" sx={img} />
      </Container>
    </Box>
  );
};

export default ShawarmaSection;
