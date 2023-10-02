import { email } from "../../utils/zod";
import { ForgetPasswordFormType } from "./types";
import zod from "zod";

export const forgetPasswordFormIntitalValues: ForgetPasswordFormType = {
  email: "",
};
export const forgetPasswordFormSchema = zod.object({
  email: email(),
});
