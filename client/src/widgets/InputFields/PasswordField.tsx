import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import React, { useState } from "react";
import SimpleTextField from "./SimpleTextField";

const PasswordField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function (props, ref) {
    const { label = "Password", placeholder = "Enter Password" } = props;
    const [showPassword, setShowPassword] = useState(false);
    return (
      <SimpleTextField
        type={showPassword ? "text" : "password"}
        label={label}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...props}
        ref={ref}
      />
    );
  }
);
export default PasswordField;
