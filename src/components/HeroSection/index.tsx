import { useEffect, useRef, useState } from "react";
import type React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { container, root, orderButtonWrapper, orderButton, floatingOrderButton } from "./style";

const HeroSection: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const element = buttonRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isAboveViewport = entry.boundingClientRect.bottom <= 0;

        setShowFloatingButton(!entry.isIntersecting && isAboveViewport);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Box component="section" sx={root}>
        <Container maxWidth="lg" sx={container}>
          <Typography variant="h1">Your Neighborhood Market for All Things Fresh</Typography>

          <Typography variant="p">A place where shopping becomes a moment to enjoy</Typography>

          {/* HERO BUTTON */}
          <Box ref={buttonRef} sx={orderButtonWrapper}>
            <Button
              variant="contained"
              href={"/order-online"}
              endIcon={<ArrowForwardRoundedIcon />}
              sx={orderButton}
            >
              Make an Online Order
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FLOATING BUTTON */}
      {showFloatingButton && (
        <Button
          variant="contained"
          href={"/order-online"}
          endIcon={<ArrowForwardRoundedIcon />}
          sx={floatingOrderButton}
        >
          Make an Online Order
        </Button>
      )}
    </>
  );
};

export default HeroSection;
