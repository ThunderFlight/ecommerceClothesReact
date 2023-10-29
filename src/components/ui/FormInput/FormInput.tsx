import classNames from 'classnames';
import styles from './FormInput.module.scss';
import { FC } from "react";


interface prop  {
    size:string
    key:string,
    label:string,
    pattern:string,
    name:string,
    register:object;
}



const FormInput:FC<prop> = ({size, key ,label, pattern, name, register}) => {
    console.log(typeof register);
    
    return (
        <>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input className={classNames(styles[size], styles.input)}  key={key} {...register(name, {pattern: pattern, required: true})}/>
        </>
    )
}

export default FormInput;