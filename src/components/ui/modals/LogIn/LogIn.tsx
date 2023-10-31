import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./LogIn.module.scss";
import { FC } from "react";
import FormInput from "@components/ui/FormInput/FormInput";
import { uid } from "uid";
import classNames from "classnames";
import Button from "@components/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { logInCheckData } from "../../../../store/counter/usersSlice";

export interface LogInInputFields {
    email:string;
    password:string;
}

interface props {
    openOrClosed:boolean,
    close:() => void,
}


const LogIn:FC<props> = ({openOrClosed, close}) => {
    const {
      register,
      handleSubmit,
    } = useForm<LogInInputFields>({
      defaultValues: {
        email: "",
        password: "",
        // userId: uid()
      }
    });
    
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state)

    const onSubmit: SubmitHandler<LogInInputFields> = data => {
      close();
      dispatch({type:logInCheckData, payload:data})
    
    };
      
  return (
    <div className={classNames(openOrClosed ? styles.logIn : styles.logInClosed)}>
      <form className={styles.logIn__form} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              key={uid()}
              label='Email'
              pattern={/[A-z,0-9]+@[a-z]+.[a-z]+/gi}
              name='email'
              register={register}
              size='default'
            />
            <FormInput
              key={uid()}
              label='Password'
              pattern={/(?=.*[a-z])(?=.*[A-Z]).{8}/gi}
              name='password'
              register={register}
              size='default'
            />
            <Button size="default" name="LogIn"/>
      </form>
    </div>
  );
};

export default LogIn;
