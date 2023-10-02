import {
  Box,
  Divider,
  FormControl,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { loginFormIntitalValues, loginFormSchema } from "./constants";
import { LoginFormType } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { EmailField, PasswordField } from "../../widgets/InputFields";
import { ContainedButton } from "../../widgets/Buttons";

const LoginPage = () => {
  const theme = useTheme();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: loginFormIntitalValues,
    resolver: zodResolver(loginFormSchema),
  });
  const handleSubmitForm = useCallback((data: LoginFormType) => {
    console.log({ data });
  }, []);
  return (
    <>
      <Typography variant="h5">Login Here</Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit(handleSubmitForm)}
        fullWidth
        noValidate={true}
      >
        <Stack gap={3}>
          <EmailField
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          <PasswordField
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <ContainedButton type="submit">Login</ContainedButton>
          <Divider />
          {/* <ContinueWithGoogle /> */}
        </Stack>
      </FormControl>
      <Box className="text-center">
        <Link
          to={"/forget-password"}
          style={{ textDecoration: "none", color: theme.palette.primary.main }}
        >
          <Typography variant="subtitle1" sx={{ cursor: "pointer" }}>
            Forget Password?
          </Typography>
        </Link>
        <Link
          to={"/signup"}
          style={{ textDecoration: "none", color: theme.palette.primary.main }}
        >
          <Typography variant="subtitle1" sx={{ cursor: "pointer" }}>
            Don't have an account?
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default LoginPage;
