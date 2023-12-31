import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './LogIn.module.scss';
import { FC } from 'react';
import FormInput from '@/components/ui/FormInput/FormInput';
import { uid } from 'uid';
import Button from '@/components/ui/Button/Button';
import { useAppDispatch } from '../../../../hooks/redux';
import { logInCheckData } from '../../../../store/slice/usersSlice';

export interface LogInInputFields {
  email: string;
  password: string;
}

interface LogInProps {
  close: () => void;
  autorizeTrue: () => void;
  autorizeFalse: () => void;
}

const emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi;
const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z]).{8}/gi;

const LogIn: FC<LogInProps> = ({close, autorizeTrue, autorizeFalse }) => {
  const { register, handleSubmit } = useForm<LogInInputFields>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<LogInInputFields> = (data) => {
    close();
    dispatch({ type: logInCheckData, payload: data });
    JSON.parse(localStorage.getItem('user') || '{}').map((item: LogInInputFields) => {
      return item.password === data.password ? autorizeTrue() : autorizeFalse();
    });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        key={uid()}
        label="Email"
        pattern={emailRegExp}
        name="email"
        register={register}
        size="default"
      />
      <FormInput
        key={uid()}
        label="Password"
        pattern={passwordRegExp}
        name="password"
        register={register}
        size="default"
      />
      <Button size="default" name="LogIn" />
    </form>
  );
};

export default LogIn;
