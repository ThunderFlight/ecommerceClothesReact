import classNames from 'classnames';
import styles from './UnderLine.module.scss'
import { FC } from 'react';

interface props {
    color: string;
}

const UnderLine:FC<props> = ({color}) => {
    return <span className={classNames(styles.underLine, styles[color])}></span>
}

export default UnderLine;