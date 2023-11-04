import classNames from 'classnames';
import styles from './UnderLine.module.scss'
import { FC } from 'react';

interface UnderLineProps {
    color: string;
}

const UnderLine:FC<UnderLineProps> = ({color}) => {
    return <span className={classNames(styles.underLine, styles[color])}></span>
}

export default UnderLine;