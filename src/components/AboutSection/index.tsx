import type React from "react";

import { Box, Container, Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import { about } from "../../assets";
import { aboutSection } from "src/utils/constants/text/home";
// import { CustomPicture } from "../common/CustomPicture";

import { containerInner, leftBlock, listItem, listItemIcon, root } from "./style";
import CustomVideo from "../common/CustomVideo";

const AboutSection: React.FC = () => {
  return (
    <Box component="section" sx={root}>
      <Container maxWidth="lg">
        <Box sx={containerInner}>
          <Box sx={leftBlock}>
            <Typography variant="h2">About Us</Typography>
            <Typography variant="body1">{aboutSection.text}</Typography>

            <Stack spacing={1.5}>
              {aboutSection.list.map((feature, index) => (
                <Box key={index} sx={listItem}>
                  <CheckCircleIcon sx={listItemIcon} />

                  <Typography variant="body1">{feature}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* <CustomPicture src={about} alt="XO Harvest Fresh Store" /> */}
          <CustomVideo
            src={`${import.meta.env.BASE_URL}videos/landing.mp4`}
            height="600px"
            borderRadius={20}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
