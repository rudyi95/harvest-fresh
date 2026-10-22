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
