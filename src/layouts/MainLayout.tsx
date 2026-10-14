import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from './Footer'

const MainLayout = () => {
  return (
    <Box>
      <Header />

      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
