import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  backgroundColor: "#faf9f6",
  py: { xs: 6, md: 10 },
  textAlign: "left",
};

export const containerInner: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1.15fr 1fr",
  },
  alignItems: "center",
  gap: { xs: 5, md: 8 },
};

export const leftBlock: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

export const listItem: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
};

export const listItemIcon: SxProps<Theme> = {
  color: "#b65c68",
  fontSize: 19,
};
