import styles from "./Footer.module.scss";
import facebook from "@/assets/icons8-facebook.svg";
import instagram from "@/assets/icons8-instagram.svg";
import twitter from "@/assets/icons8-twitter(1).svg";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.wrapperContainer}>
          <h2 className={styles.wrapperContainer__title}>
            Subscribe to get offers in your inbox
          </h2>
          <p className={styles.wrapperContainer__description}>
            Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
            condimentum
          </p>
          <form className={styles.wrapperContainer__formSubscribe}>
            <input
              type="text"
              className={styles.input}
              placeholder="Your email address..."
            />
            <Button name="Subcribe" size="default" />
          </form>
          <ul className={styles.navigation}>
            <li>But T-Shirts</li>
            <li>Women</li>
            <li>Men</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className={styles.wrapperContainer__socialNetwork}>
            <button className={styles.button}>
              <img src={facebook} className={styles.imageFacebook} />
            </button>
            <button className={styles.button}>
              <img src={twitter} className={styles.imageFacebook} />
            </button>
            <button className={styles.button}>
              <img src={instagram} className={styles.imageFacebook} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footer__blackLine}>
        <p className={styles.textBlackLine}>
          T-Shirts Store © 2023 | Powered by T-Shirts Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
