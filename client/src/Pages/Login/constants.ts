import { LoginFormType } from "./types";
import zod from "zod";
import { email, nonempty } from "../../utils/zod";
export const loginFormIntitalValues: LoginFormType = {
  email: "",
  password: "",
};
export const loginFormSchema = zod.object({
  email: email(),
  password: nonempty("Please enter your password"),
});
