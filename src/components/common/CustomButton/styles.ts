import type { SxProps, Theme } from "@mui/material/styles";

export const root: SxProps<Theme> = {};

export const button: SxProps<Theme> = {
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "30px",
  textTransform: "none",
  fontSize: 13,
  fontWeight: 500,
  px: 3,
  py: 1,
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "#c62828",
    boxShadow: "none",
  },

  "&.Mui-disabled": {
    backgroundColor: "#999",
    color: "#fff",
  },
};
