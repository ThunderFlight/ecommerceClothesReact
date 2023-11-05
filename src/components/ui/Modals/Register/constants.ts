import { Path, ValidationRule } from "react-hook-form";
import { RegisterInputFields } from "./Register";


interface AuthInput {
    type: string,
    label: string,
    pattern:ValidationRule<RegExp>,
    name: Path<RegisterInputFields>,
    size: string
}

export const InputPropsList:AuthInput[] = [
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
      pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi,
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