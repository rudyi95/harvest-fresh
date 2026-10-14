import { Box, Container, Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { about } from "../../assets";

const features = [
  "Freshly prepared foods and thoughtfully stocked shelves",
  "Committed to quality, customer care, and clean spaces",
  "A one-stop shop for grocery, meals, health, and home",
  "Warm atmosphere and service that feels like family",
];

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about-us"
      sx={{
        backgroundColor: "#faf9f6",
        py: { xs: 6, md: 10 },
        textAlign: "left",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.15fr 1fr",
            },
            alignItems: "center",
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* Left Content */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "30px",
                  md: "38px",
                },
                fontWeight: 500,
                color: "#555",
                mb: 3,
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#666",
                mb: 3,
              }}
            >
              At XO Harvest Fresh, we believe grocery shopping should feel personal, vibrant, and
              fulfilling. Here we've created a place where quality matters, service is friendly, and
              every department brings you something fresh, useful, and unexpected. From our deli
              counter and prepared meals to everyday staples and unique imports, our goal is to make
              your visit feel like a discovery. We take pride in offering a wide range of essentials
              while focusing on freshness, cleanliness, and comfort.
            </Typography>

            {/* Features */}
            <Stack spacing={1.5}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#b65c68",
                      fontSize: 19,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Right Image */}
          <Box
            component="img"
            src={about}
            alt="XO Harvest Fresh Store"
            sx={{
              width: "100%",
              height: {
                xs: 280,
                sm: 400,
                md: 400,
              },
              objectFit: {
                xs: "cover",
                md: "contain",
              },
              borderRadius: "8px",
              display: "block",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
