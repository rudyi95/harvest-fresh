import { Box, Container, Typography } from "@mui/material";

import { CBreadcrumbs } from "../components/common";
import { weeklyImage } from "src/assets";

const WeeklySpecialsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="Holiday Menu" />
      </Box>

      <Container>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h2">Holiday Menu</Typography>
        </Box>
        <Box>
          <Box
            component="img"
            alt="Thanksgiving image"
            src={weeklyImage}
            sx={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WeeklySpecialsPage;
