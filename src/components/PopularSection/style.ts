import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  backgroundColor: "#f3f3f3",
  py: { xs: 6, md: 10 },
};

export const topBlock: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  textAlign: "center",
  mb: { xs: 5, md: 7 },
};

export const cardImg: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "8px",
  cursor: "pointer",
  outlineOffset: 4,

  "&:hover .department-image, &:focus-visible .department-image": {
    transform: "scale(1.08)",
  },

  "&:hover .department-overlay, &:focus-visible .department-overlay": {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  "&:hover .department-text, &:focus-visible .department-text": {
    opacity: 1,
    transform: "translateY(0)",
  },
};

export const img: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.5s ease",
};

export const overlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0)",
  transition: "background-color 0.4s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const overlayText: SxProps<Theme> = {
  color: "#fff",
  fontSize: 17,
  fontWeight: 600,
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.4s ease",
};

export const gridBlock: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  },
  columnGap: 3,
  rowGap: 4,
};

export const categoryName: SxProps<Theme> = {
  mt: 2,
  color: "#666",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.5px",
};
