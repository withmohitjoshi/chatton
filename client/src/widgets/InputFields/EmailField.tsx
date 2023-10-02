import { TextFieldProps } from "@mui/material";
import React from "react";
import SimpleTextField from "./SimpleTextField";

const EmailField = React.forwardRef<HTMLInputElement, TextFieldProps>(function (
  props,
  ref
) {
  const { label = "Email", placeholder = "Enter email id" } = props;
  return (
    <SimpleTextField
      type="email"
      label={label}
      placeholder={placeholder}
      {...props}
      ref={ref}
    />
  );
});
export default EmailField;
