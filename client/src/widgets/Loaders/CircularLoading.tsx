import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";

const CircularLoading: React.FC<
  CircularProgressProps & { text?: string }
> = (props) => {
  const { text } = props;
  return (
    <Box className="flex items-center gap-4">
      <CircularProgress size={"1rem"} {...props} />
      {text && (
        <Typography variant={"body1"}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default CircularLoading;
