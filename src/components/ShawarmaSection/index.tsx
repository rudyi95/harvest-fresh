import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import shawarmaImage from "../../assets/ChefSlicingShawarma.png";

const ShawarmaSection = () => {
  return (
    <Box
      component="section"
      id="shawarma"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#faf9f6",
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: {
                xs: "28px",
                md: "36px",
              },
              fontWeight: 600,
              color: "#555",
              mb: 2,
            }}
          >
            Sink your teeth into something special.
          </Typography>

          <Typography
            sx={{
              maxWidth: "850px",
              mx: "auto",
              fontSize: {
                xs: "15px",
                md: "18px",
              },
              lineHeight: 1.7,
              color: "#666",
            }}
          >
            Our shawarma is slow-roasted daily, seasoned with authentic spices, and carved to order
            for unbeatable flavor and tenderness. From wraps to plates, every bite is a savory
            celebration.
          </Typography>
        </Box>

        <Box
          component="img"
          src={shawarmaImage}
          alt="Chef preparing fresh shawarma"
          sx={{
            display: "block",
            width: "100%",
            maxWidth: "900px",
            height: {
              xs: "240px",
              sm: "350px",
              md: "420px",
            },
            mx: "auto",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Container>
    </Box>
  );
};

export default ShawarmaSection;
