import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import EmailField from "../../widgets/InputFields/EmailField";
import ContainedButton from "../../widgets/Buttons/ContainedButton";
import {
  Box,
  Divider,
  FormControl,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  forgetPasswordFormIntitalValues,
  forgetPasswordFormSchema,
} from "./constants";
import { ForgetPasswordFormType } from "./types";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgetPasswordFormType>({
    defaultValues: forgetPasswordFormIntitalValues,
    resolver: zodResolver(forgetPasswordFormSchema),
  });
  const handleSubmitForm = useCallback((data: ForgetPasswordFormType) => {
    console.log({ data });
  }, []);
  return (
    <>
      <Typography variant="h5">Forget Password</Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit(handleSubmitForm)}
        fullWidth
      >
        <Stack gap={3}>
          <EmailField
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          <Divider />
          <ContainedButton type="submit">Send Link</ContainedButton>
        </Stack>
      </FormControl>
      <Box className="text-center">
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: theme.palette.primary.main }}
        >
          <Typography variant="subtitle1" sx={{ cursor: "pointer" }}>
            Back to Login
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default ForgetPassword;
