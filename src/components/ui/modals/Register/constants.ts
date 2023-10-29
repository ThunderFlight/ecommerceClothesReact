import { Path, ValidationRule } from "react-hook-form";
import { FormInputVal } from "./Register";


interface AuthInput {
    type: string,
    label: string,
    pattern:ValidationRule<RegExp>,
    name: Path<FormInputVal>,
    size: string
}

export const inputPropsList:AuthInput[] = [
    {
      type: "text",
      label: "First Name",
      name: "firstName",
      pattern: /[A-z]+/gi,
      size: 'default'
    },
    {
      type: "text",
      label: "Last Name",
      name: "lastName",
      pattern: /[A-z]+/gi,
      size: 'default'
    },
    {
      type: "text",
      label: "E-mail",
      name: "email",
      pattern: /[A-z,0-9]+@[a-z]+.[a-z]+/gi,
      size: 'default'
    },
    {
      type: "text",
      label: "Password",
      name: "password",
      pattern: /(?=.*[a-z])(?=.*[A-Z]).{8}/gi,
      size: 'default'
    },
  ];