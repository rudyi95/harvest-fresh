import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "src/components/common";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default MainLayout;
