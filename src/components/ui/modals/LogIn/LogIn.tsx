import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./LogIn.module.scss";
import { FC } from "react";
import FormInput from "@/components/ui/FormInput/FormInput";
import { uid } from "uid";
import classNames from "classnames";
import Button from "@/components/ui/Button/Button";
import { useAppDispatch } from "../../../../hooks/redux";
import { logInCheckData } from "../../../../store/slice/usersSlice";

export interface LogInInputFields {
    email:string;
    password:string;
}

interface props {
    openOrClosed:boolean,
    close:() => void,
    autorizeTrue:() => void,
    autorizeFalse:() => void,
}

const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z]).{8}/gi

const LogIn:FC<props> = ({openOrClosed, close, autorizeTrue, autorizeFalse}) => {
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
    // const data = useAppSelector((state) => state)

    const onSubmit: SubmitHandler<LogInInputFields> = data => {
      close();
      dispatch({type:logInCheckData, payload:data})
      JSON.parse(localStorage.getItem('user') || '{}').map((item:LogInInputFields) => {
        return item.password === data.password ? autorizeTrue() : autorizeFalse()
      })
      
    };
      
  return (
    <div className={classNames(openOrClosed ? styles.logIn : styles.logInClosed)}>
      <form className={styles.logIn__form} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              key={uid()}
              label='Email'
              pattern={emailRegExp}
              name='email'
              register={register}
              size='default'
            />
            <FormInput
              key={uid()}
              label='Password'
              pattern={passwordRegExp}
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
