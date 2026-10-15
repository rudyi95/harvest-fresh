import { useEffect, useState } from "react";
import { Fab, Fade } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={visible} unmountOnExit>
      <Fab
        size="medium"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: {
            xs: 85,
            md: 30,
          },
          right: {
            xs: 16,
            md: 30,
          },
          zIndex: 1100,
          backgroundColor: "#874747",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#6d3535",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
};
