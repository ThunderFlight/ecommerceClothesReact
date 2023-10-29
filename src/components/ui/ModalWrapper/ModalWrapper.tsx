import { FC } from 'react'
import styles from './ModalWrapper.module.scss'
import classNames from 'classnames'

interface props  {
    children: JSX.Element,
    openOrClosed: boolean,
    close:() => void
}

const ModalWrapper:FC<props> = ({children, openOrClosed}) => {
 
    return (
        <div className={classNames(openOrClosed ? styles.modalWrapper : styles.modalWrapperClosed)}>
            {children}
        </div>
    )
}

export default ModalWrapper;