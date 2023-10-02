import { TextFieldProps, TextField } from "@mui/material";
import React from "react";

const SimpleTextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function (props, ref) {
    return (
      <TextField
        type="text"
        variant="outlined"
        size="medium"
        fullWidth
        {...props}
        ref={ref}
      />
    );
  },
);
export default SimpleTextField;
