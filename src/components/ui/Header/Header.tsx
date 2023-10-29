import styles from "./Header.module.scss";
import basket from "@assets/basket.png";
import magnifyingGlass from "@assets/magnifyingGlass.png";
import Navigation from "../Navigation/Navigation";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Register from "../modals/Register/Register";
import { useBoolean } from "../../../hooks/useBoolean"
const Header = () => {
  const {value: registerValue,setTrue: setRegisterTrue,setFalse: setRegisterFalse} = useBoolean()
  return (
    <div className={styles.wrapper}>
      <Navigation styleText="list" />
      <div className={styles.wrapper__logo}>
        <a href="/">
          <h2 className={styles.logoTshirtTopText}>T-SHIRTS</h2>
          <div className={styles.logoTshirtLine}></div>
          <h3 className={styles.logoTshirtBottomText}>store</h3>
        </a>
      </div>
      <div className={styles.wrapper__userButtons}>
        <button className={styles.userButtonsBuySearch}>
          <img src={magnifyingGlass} className={styles.imageButtonsUser} />
        </button>
        <div className={styles.fullBasketCostItems}>
          <p className={styles.fullCostItems}></p>
          <button className={styles.userButtonsBuySearch}>
            <img src={basket} className={styles.imageButtonsUser} />
          </button>
        </div>
        <div>
          <button className={styles.logInButton}>LOG IN</button>
          <span> | </span>
          <button className={styles.logInButton} onClick={setRegisterTrue}>REGISTER</button>
        </div>
      </div>
      <ModalWrapper close={setRegisterFalse} openOrClosed={registerValue}>
        <Register close={setRegisterFalse} openOrClosed={registerValue}/>
      </ModalWrapper>
    </div>
  );
};

export default Header;
