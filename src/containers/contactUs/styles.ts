import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  backgroundColor: "#fff",
};

export const breadCrumbs: SxProps<Theme> = {
  borderBottom: "1px solid #f1f1f1",
  py: 2,
};

export const container: SxProps<Theme> = {
  pt: { xs: 5, md: 8 },
  pb: { xs: 7, md: 10 },
  textAlign: "left",
};

export const containerInner: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "0.85fr 2fr",
  },
  gap: { xs: 5, md: 7 },
};

export const leftColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const rightColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const subtitle2: SxProps<Theme> = {
  fontWeight: 600,
  color: "#444",
  mb: 0.5,
};

export const body2: SxProps<Theme> = {
  fontSize: 13,
  color: "#555",
  lineHeight: 1.7,
};

export const contactForm: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const inputForm: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
    backgroundColor: "#fff",
    fontSize: 14,
  },
  "& .MuiOutlinedInput-input": {
    py: 1.5,
  },
};
