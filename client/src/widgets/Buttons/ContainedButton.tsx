import { Button, ButtonProps } from "@mui/material";
import React from "react";

const ContainedButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { isLoading?: boolean }
>(function (props, ref) {
  const { children, isLoading, ...buttonProps } = props;
  return (
    <Button
      variant={"contained"}
      fullWidth={true}
      size={"medium"}
      color={"secondary"}
      type="button"
      disabled={!!isLoading}
      {...buttonProps}
    >
      {children}
    </Button>
  );
});

export default ContainedButton;
