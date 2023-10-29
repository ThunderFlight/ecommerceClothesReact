import styles from './ModalWrapper.module.scss'

type props = {
    children: JSX.Element
}

const ModalWrapper = ({children}:props) => {
    return (
        <div className={styles.modalWrapper}>
            {children}
        </div>
    )
}

export default ModalWrapper;