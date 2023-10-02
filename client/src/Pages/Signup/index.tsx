import {
  Divider,
  FormControl,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { SignupFormType } from "./types";
import { signupFormIntitalValues, signupFormSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContainedButton } from "../../widgets/Buttons";
import { Link } from "react-router-dom";
import { EmailField, PasswordField, SimpleTextField } from "../../widgets/InputFields";

const SignupPage = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFormType>({
    defaultValues: signupFormIntitalValues,
    resolver: zodResolver(signupFormSchema),
  });
  const handleSubmitForm = (data: SignupFormType) => {};
  return (
    <>
      <Typography variant="h5">Signup Here</Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit(handleSubmitForm)}
        fullWidth
      >
        <Stack gap={3}>
          <SimpleTextField
            {...register("name")}
            label="Name"
            placeholder="Enter your name"
            error={!!errors?.name}
            helperText={errors?.name?.message}
          />
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
          <ContainedButton type="submit">Signup</ContainedButton>
          <Divider />
        </Stack>
      </FormControl>
      <Link
        to={"/login"}
        style={{ textDecoration: "none", color: theme.palette.primary.main }}
      >
        <Typography variant="subtitle1" sx={{ cursor: "pointer" }}>
          Already have an account?
        </Typography>
      </Link>
    </>
  );
};

export default SignupPage;
