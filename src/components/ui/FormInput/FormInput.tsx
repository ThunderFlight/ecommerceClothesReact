import classNames from 'classnames';
import styles from './FormInput.module.scss';
import { UseFormRegister, Path, ValidationRule, FieldValues } from 'react-hook-form';



interface FormInputProps<Type extends FieldValues>{
    size:string
    key:string,
    label:string,
    pattern:ValidationRule<RegExp>,
    name: Path<Type>,
    register: UseFormRegister<Type>;
}


const FormInput = <Type extends FieldValues>({size, key ,label, pattern, name, register}:FormInputProps<Type>) => {
    
    return (
        <div key={key}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input autoComplete='on' className={classNames(styles[size], styles.input)}  key={key} {...register(name, {pattern: pattern, required: true})}/>
        </div>
    )
}

export default FormInput;