import type { SxProps, Theme } from "@mui/material/styles";

export const containerStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#111",
};

export const videoStyles: SxProps<Theme> = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};
