import React from "react";

import { Box, Button, CircularProgress, type ButtonProps } from "@mui/material";
import { button, root } from "./styles";

interface ICustomButton {
  loading?: boolean;
  trueText?: string;
  falseText?: string;
}

export const CustomButton: React.FC<ButtonProps & ICustomButton> = (props) => {
  return (
    <Box sx={root}>
      <Button
        {...props}
        type="submit"
        variant="contained"
        startIcon={props.loading ? <CircularProgress size={16} color="inherit" /> : undefined}
        sx={button}
      >
        {props.loading ? props.trueText : props.falseText}
      </Button>
    </Box>
  );
};
