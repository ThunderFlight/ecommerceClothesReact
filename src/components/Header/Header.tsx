import styles from "./Header.module.scss";
import basket from "../../assets/basket.png";
import magnifyingGlass from "../../assets/magnifyingGlass.png";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.wrapper__navigation}>
        <li className={styles.navigationElement}>BUY T-SHIRTS</li>
        <li className={styles.navigationElement}>WOMEN</li>
        <li className={styles.navigationElement}>MEN</li>
        <li className={styles.navigationElement}>ABOUT</li>
        <li className={styles.navigationElement}>CONTACT</li>
      </ul>
      <div className={styles.wrapper__logo}>
        <h2 className={styles.logoTshirtTopText}>T-SHIRTS</h2>
        <div className={styles.logoTshirtLine}></div>
        <h3 className={styles.logoTshirtBottomText}>store</h3>
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
        <button className={styles.logInButton}>LOG IN</button>
      </div>
    </div>
  );
};

export default Header;