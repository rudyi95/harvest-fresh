import React from "react";

import { Box } from "@mui/material";

interface ICustomPicture {
  src: string;
  alt?: string;
}

export const CustomPicture: React.FC<ICustomPicture> = (props) => {
  return (
    <Box
      component="img"
      src={props.src}
      alt={props.alt || "No Image"}
      sx={{
        width: "100%",
        height: "auto",
        maxHeight: {
          xs: 280,
          sm: 400,
          md: 400,
        },
        objectFit: {
          xs: "cover",
          md: "contain",
        },
        borderRadius: "20px",
        display: "block",
      }}
    />
  );
};
