import type React from "react";

import { Box, Container, Typography } from "@mui/material";

import { popularSection } from "src/utils/constants/text/home";
import { POPULAR_DEPARTMENTS } from "src/utils/constants/landing";

import {
  cardImg,
  categoryName,
  gridBlock,
  img,
  overlay,
  overlayText,
  root,
  topBlock,
} from "./style";

const PopularSection: React.FC = () => {
  return (
    <Box component="section" sx={root}>
      <Container maxWidth="lg">
        <Box sx={topBlock}>
          <Typography variant="h2">Popular Departments</Typography>
          <Typography variant="body1">{popularSection}</Typography>
        </Box>
        <Box sx={gridBlock}>
          {POPULAR_DEPARTMENTS.map((department, index) => (
            <Box key={index}>
              <Box tabIndex={0} role="group" aria-label={department.title} sx={cardImg}>
                <Box component="img" src={department.image} alt={department.title} sx={img} />
                <Box sx={overlay}>
                  <Typography sx={overlayText}>Read more</Typography>
                </Box>
              </Box>

              <Typography sx={categoryName}>{department.title}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PopularSection;
