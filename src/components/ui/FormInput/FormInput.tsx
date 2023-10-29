import classNames from 'classnames';
import styles from './FormInput.module.scss';
import { FC } from "react";
import { UseFormRegister, Path, ValidationRule } from 'react-hook-form';
import { FormInputVal } from '../modals/Register/Register';



interface Prop  {
    size:string
    key:string,
    label:string,
    pattern:ValidationRule<RegExp>,
    name: Path<FormInputVal>,
    register: UseFormRegister<FormInputVal>;
}


const FormInput:FC<Prop> = ({size, key ,label, pattern, name, register}) => {
    console.log(typeof register);
    
    return (
        <>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input className={classNames(styles[size], styles.input)}  key={key} {...register(name, {pattern: pattern, required: true})}/>
        </>
    )
}

export default FormInput;