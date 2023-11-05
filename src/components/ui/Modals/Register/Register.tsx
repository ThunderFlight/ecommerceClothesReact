import FormInput from "@/components/ui/FormInput/FormInput";
import styles from "./Register.module.scss";
import { uid } from "uid";
import { useForm, SubmitHandler} from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import { FC, useEffect } from "react";
import { InputPropsList } from "./constants";
import { registration } from "../../../../store/slice/usersSlice";
import { useAppDispatch } from "../../../../hooks/redux";


export interface RegisterInputFields {
  firstName:string,
  lastName: string,
  email: string,
  password: string,
}

interface RegisterProps  {
  close:() => void
}
const Register:FC<RegisterProps> = ({close}) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<RegisterInputFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      // userId: uid()
    }
  });
  
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegisterInputFields> = data => {
    close()
    dispatch({type:registration, payload:data})
  };
  
  useEffect(() => {
    JSON.parse(localStorage.getItem('user') || '{}').length === 0 && dispatch({type:registration, payload:JSON.parse(localStorage.getItem('user') || '{}')})
  })
  return (
      <form
        className={styles.register__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {InputPropsList.map((item) => {
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
  );
};

export default Register;
