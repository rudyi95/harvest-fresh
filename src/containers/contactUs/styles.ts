import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  backgroundColor: "#fff",
};

export const breadCrumbs: SxProps<Theme> = {
  borderBottom: "1px solid #f1f1f1",
  py: 2,
};

export const container: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  boxSizing: "border-box",

  px: {
    xs: 2,
    sm: 3,
    md: 3,
  },

  pt: {
    xs: 4,
    sm: 5,
    md: 8,
  },

  pb: {
    xs: 6,
    sm: 8,
    md: 10,
  },

  textAlign: "left",
};

export const containerInner: SxProps<Theme> = {
  display: "grid",
  width: "100%",
  minWidth: 0,

  gridTemplateColumns: {
    xs: "minmax(0, 1fr)",
    md: "minmax(0, 0.85fr) minmax(0, 2fr)",
  },

  gap: {
    xs: 5,
    sm: 6,
    md: 7,
  },

  alignItems: "start",
};

export const leftColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0,

  gap: {
    xs: 2.5,
    md: 3,
  },

  overflowWrap: "anywhere",
};

export const rightColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0,

  gap: {
    xs: 2.5,
    md: 3,
  },
};

export const subtitle2: SxProps<Theme> = {
  mb: 0.5,
};

export const body2: SxProps<Theme> = {
  color: "#555",
  overflowWrap: "anywhere",
};

export const contactForm: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",

  gap: {
    xs: 2,
    md: 2.5,
  },
};

export const formFieldsGrid: SxProps<Theme> = {
  display: "grid",
  width: "100%",
  minWidth: 0,

  gridTemplateColumns: {
    xs: "minmax(0, 1fr)",
    sm: "repeat(2, minmax(0, 1fr))",
  },

  gap: 2,
};

export const inputForm: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",

  "& .MuiInputBase-root": {
    minWidth: 0,
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
    backgroundColor: "#fff",
    fontSize: 14,
  },

  "& .MuiOutlinedInput-input": {
    minWidth: 0,
    py: 1.5,
  },

  "& .MuiInputBase-inputMultiline": {
    minWidth: 0,
  },
};

export const newsletter: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  m: 0,

  display: "flex",
  alignItems: "flex-start",

  gap: {
    xs: 1,
    md: 2,
  },

  "& .MuiCheckbox-root": {
    flexShrink: 0,
    p: 0,
    mt: 0.25,
  },

  "& .MuiFormControlLabel-label": {
    minWidth: 0,
    flex: 1,
    overflowWrap: "anywhere",
  },
};

export const captchaContainer: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
};

export const contactDetails: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  minWidth: 0,
  gap: 1.5,

  "& svg": {
    flexShrink: 0,
  },

  "& a": {
    overflowWrap: "anywhere",
  },
};
