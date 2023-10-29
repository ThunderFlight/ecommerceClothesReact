import FormInput from "@components/ui/FormInput/FormInput";
import styles from "./Register.module.scss";
import { uid } from "uid";
import { useForm, SubmitHandler} from "react-hook-form";
import Button from "@components/ui/Button/Button";


export interface FormInputVal {
  firstName:string,
  lastName: string,
  email: string,
  password: string,
}

// export type InputProps = {
//   register: UseFormRegister<FormInputVal>;
//   required: boolean;
// };


const inputPropsList = [
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    pattern: "[A-z]+",
    size: 'default'
  },
  {
    type: "text",
    label: "Last Name",
    name: "lastName",
    pattern: "[A-z]+",
    size: 'default'
  },
  {
    type: "text",
    label: "E-mail",
    name: "email",
    pattern: "[A-z,0-9]+@[a-z]+.[a-z]+",
    size: 'default'
  },
  {
    type: "text",
    label: "Password",
    name: "password",
    pattern: "(?=.*[a-z])(?=.*[A-Z]).{8}",
    size: 'default'
  },
];


const Register = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInputVal>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      // userId: uid()
    }
  });
  console.log(typeof register);
  
  const onSubmit: SubmitHandler<FormInputVal> = data => console.log(data);
  
  return (
    <div className={styles.register}>
      <form
        className={styles.register__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputPropsList.map((item) => {
          return (
            <FormInput
              key={uid()}
              label={item.label}
              pattern={item.pattern}
              name={item.name}
              register={register}
              size={item.size}
            />
          );
        })}
        <Button size="default" name="Register"/>
      </form>
    </div>
  );
};

export default Register;
