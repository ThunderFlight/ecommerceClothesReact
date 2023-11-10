import styles from './Header.module.scss';
import basket from '@/assets/basket.png';
import magnifyingGlass from '@/assets/magnifyingGlass.png';
import Navigation from '../Navigation/Navigation';
import Register from '../Modals/Register/Register';
import { useBoolean } from '../../../hooks/useBoolean';
import LogIn from '../Modals/LogIn/LogIn';
import DefaultModal from '../Modals/DefaultModal/DefaultModal';
const Header = () => {
  const {
    value: registerValue,
    setTrue: setRegisterTrue,
    setFalse: setRegisterFalse,
  } = useBoolean();
  const { value: logInValue, setTrue: setLogInTrue, setFalse: setLogInFalse } = useBoolean();
  const {
    value: userAutorize,
    setTrue: setAutorizeTrue,
    setFalse: setAutorizeFalse,
  } = useBoolean();

  console.log(logInValue);

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
          <img src={magnifyingGlass} className={styles.imageButtonsUser} alt='magnifying glass'/>
        </button>
        <div className={styles.fullBasketCostItems}>
          <p className={styles.fullCostItems}></p>
          <button className={styles.userButtonsBuySearch}>
            <img src={basket} className={styles.imageButtonsUser} alt='basket'/>
          </button>
        </div>
        <div>
          {userAutorize ? (
            <span>Autorized</span>
          ) : (
            <>
              <button className={styles.logInButton} onClick={setLogInTrue}>
                LOG IN
              </button>
              <span> | </span>
              <button className={styles.logInButton} onClick={setRegisterTrue}>
                REGISTER
              </button>
            </>
          )}
        </div>
      </div>
      <DefaultModal closeOrOpen={registerValue} close={setRegisterFalse}>
        <Register close={setRegisterFalse}/>
      </DefaultModal>
      <DefaultModal closeOrOpen={logInValue} close={setLogInFalse}>
        <LogIn
          close={setLogInFalse}
          autorizeTrue={setAutorizeTrue}
          autorizeFalse={setAutorizeFalse}
        />
      </DefaultModal>
    </div>
  );
};

export default Header;
