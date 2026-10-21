import { Box, Container, Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { about } from "../../assets";
import { aboutSection } from "src/utils/constants/text/home";
import { CustomPicture } from "../common/CustomPicture";

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
              {aboutSection.text}
            </Typography>

            {/* Features */}
            <Stack spacing={1.5}>
              {aboutSection.list.map((feature, index) => (
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
          <CustomPicture src={about} alt="XO Harvest Fresh Store" />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
