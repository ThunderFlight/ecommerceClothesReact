import styles from "./Header.module.scss";
import basket from "@/assets/basket.png";
import magnifyingGlass from "@/assets/magnifyingGlass.png";
import Navigation from "../Navigation/Navigation";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Register from "../modals/Register/Register";
import { useBoolean } from "../../../hooks/useBoolean"
import LogIn from "../modals/LogIn/LogIn";
const Header = () => {
  const {value: registerValue,setTrue: setRegisterTrue,setFalse: setRegisterFalse} = useBoolean()
  const {value: logInValue,setTrue: setLogInTrue,setFalse: setLogInFalse} = useBoolean()
  const {value:userAutorize, setTrue:setAutorizeTrue, setFalse:setAutorizeFalse} = useBoolean()
  
  console.log(userAutorize);
  

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
            {
            userAutorize ?
            <span>Autorized</span>
            :
            (
            <>
            <button className={styles.logInButton} onClick={setLogInTrue}>LOG IN</button>
            <span> | </span>
            <button className={styles.logInButton} onClick={setRegisterTrue}>REGISTER</button>
            </>
            ) 
            }
        </div>
      </div>
      <ModalWrapper close={setRegisterFalse} openOrClosed={registerValue}>
        <Register close={setRegisterFalse} openOrClosed={registerValue}/>
      </ModalWrapper>
      <ModalWrapper close={setLogInFalse} openOrClosed={logInValue}>
        <LogIn close={setLogInFalse} openOrClosed={logInValue} autorizeTrue={setAutorizeTrue} autorizeFalse={setAutorizeFalse} />
      </ModalWrapper>
    </div>
  );
};

export default Header;
