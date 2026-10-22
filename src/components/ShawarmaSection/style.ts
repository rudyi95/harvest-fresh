import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  py: { xs: 6, md: 10 },
  backgroundColor: "#faf9f6",
  scrollMarginTop: "80px",
};
export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export const textBlock: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  textAlign: "center",
  mb: 4,
  maxWidth: 800,
};
export const img: SxProps<Theme> = {
  display: "block",
  width: "100%",
  maxWidth: "900px",
  height: {
    xs: "240px",
    sm: "350px",
    md: "420px",
  },
  mx: "auto",
  objectFit: "cover",
  borderRadius: "20px",
};
