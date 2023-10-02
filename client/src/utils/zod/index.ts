import zod from "zod";

export const email = () =>
  zod.string().email().nonempty("Please enter your email id");

export const name = () =>
  zod
    .string()
    .nonempty("Please enter your name")
    .regex(new RegExp(/^[A-Za-z\s]+$/), "Please enter a valid name");

export const password = (message?: string) =>
  zod
    .string()
    .nonempty(message ?? "Please enter a password")
    .regex(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
      ),
      "Password should contain atleast 1 small and 1 capital letter, 1 digit, 1 special character with min and max length of 8 and 15",
    );
export const nonempty = (message: string) => zod.string().nonempty({ message });
