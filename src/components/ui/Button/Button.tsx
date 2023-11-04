import { FC } from 'react';
import styles from './Button.module.scss'
import classNames from 'classnames';

type sizeStyle = 'small' | 'default' |'large'

interface ButtonProps {
    name: string,
    size: sizeStyle,
}

const Button:FC<ButtonProps> = ({name = '', size = 'default'}) => {
    return (
        <button className = {classNames(styles[size], styles.button)}>{name}</button>
    )
}

export default Button;