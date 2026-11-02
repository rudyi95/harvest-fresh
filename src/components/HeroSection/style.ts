import type { SxProps, Theme } from "@mui/material";

import heroBg from "src/assets/hero_bg.jpg";

export const root: SxProps<Theme> = {
  position: "relative",
  minHeight: {
    xs: "550px",
    sm: "650px",
    md: "750px",
  },
  backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.35),
                        rgba(0, 0, 0, 0.35)
                    ),
                    url("${heroBg}")
                `,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",
  overflow: "hidden",
  px: 2,
};

export const container: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,
};

export const orderButtonWrapper: SxProps<Theme> = {
  mt: 4,
  display: "flex",
  justifyContent: "center",
};

export const orderButton: SxProps<Theme> = {
  px: 4,
  py: 1.7,
  borderRadius: "50px",
  backgroundColor: "#BD3447",
  color: "#fff",
  textTransform: "none",
  fontWeight: 700,
  boxShadow: "0 6px 24px rgba(0,0,0,0.2)",

  "&:hover": {
    backgroundColor: "#9F2639",
  },
};

export const floatingOrderButton: SxProps<Theme> = {
  ...orderButton,

  position: "fixed",
  top: {
    xs: 12,
    md: 20,
  },
  right: {
    xs: 12,
    md: 24,
  },

  zIndex: 1300,

  px: {
    xs: 2,
    md: 3,
  },
  py: {
    xs: 1.2,
    md: 1.5,
  },

  animation: "orderButtonAppear 0.3s ease-out",

  "@keyframes orderButtonAppear": {
    from: {
      opacity: 0,
      transform: "translateY(-12px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
};
