import { useTheme } from "@mui/material";
import { Box, alpha } from "@mui/material";

const BoxLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          className="w-full max-w-sm mx-4 sm:m-0 flex flex-col items-center justify-between gap-6"
          border={1}
          borderColor={alpha(theme.palette.primary.main, 0.25)}
          borderRadius={2}
          p={4}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default BoxLayout;
