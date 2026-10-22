import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    p: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    p?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}
