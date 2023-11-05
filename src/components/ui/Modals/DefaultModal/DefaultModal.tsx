import { FC, ReactNode } from 'react';
import styles from './DefaultModal.module.scss';
import { createPortal } from 'react-dom';

interface DefaulModalProps {
  children: ReactNode;
  closeOrOpen: boolean;
  close: () => void;
}

const DefaultModal: FC<DefaulModalProps> = ({ children, closeOrOpen, close }) => {
  return (
    <>
      {closeOrOpen && createPortal(
        <div className={styles.modal}>
          <div className={styles.modal__overlay} onClick={close}></div>
          <div className={styles.modal__wrapper}>{children}</div>
        </div>,
        document.body
      )}
    </>
  );
};

export default DefaultModal;
