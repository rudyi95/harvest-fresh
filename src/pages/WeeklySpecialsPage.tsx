import { Box, Container } from "@mui/material";

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

      <Container sx={{ mt: 3 }}>
        <Box
          component="img"
          alt="Thanksgiving image"
          src={weeklyImage}
          sx={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </Container>
    </Box>
  );
};

export default WeeklySpecialsPage;
