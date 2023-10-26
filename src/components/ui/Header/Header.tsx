import styles from "./Header.module.scss";
import basket from "@assets/basket.png";
import magnifyingGlass from "@assets/magnifyingGlass.png";
import Navigation from "../Navigation/Navigation";


const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation styleText='list' />
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
