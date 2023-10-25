import { FC } from 'react';
import styles from './Button.module.scss'
import classNames from 'classnames';

type sizeStyle = 'small' | 'default' |'large'

interface props {
    children: string,
    size: sizeStyle,
}

const Button:FC<props> = ({children = '', size = 'default'}) => {
    return (
        <button className = {classNames(styles[size], styles.button)}>{children}</button>
    )
}

export default Button;