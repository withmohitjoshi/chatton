import { SignupFormType } from "./types";
import zod from "zod";
import { email, password, name } from "../../utils/zod";

export const signupFormIntitalValues: SignupFormType = {
  name: "",
  email: "",
  password: "",
};
export const signupFormSchema = zod.object({
  name: name(),
  email: email(),
  password: password(),
});
