import { FC } from 'react'
import styles from './ModalWrapper.module.scss'
import classNames from 'classnames'

interface ModalWrapperProps  {
    children: JSX.Element,
    openOrClosed: boolean,
    close:() => void
}

const ModalWrapper:FC<ModalWrapperProps> = ({children, openOrClosed}) => {
 
    return (
        <div className={classNames(openOrClosed ? styles.modalWrapper : styles.modalWrapperClosed)}>
            {children}
        </div>
    )
}

export default ModalWrapper;