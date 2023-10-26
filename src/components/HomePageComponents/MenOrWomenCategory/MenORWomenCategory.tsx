import styles from "./MenOrWomenCategory.module.scss";
import men from "@assets/men.webp";
import women from "@assets/women.webp";

const MenOrWomenCategory = () => {
  return (
    <section className={styles.menOrWomenCategory}>
      <div className={styles.menOrWomenCategory__wrapper}>
        <button className={styles.buttonChoose}>
          <img src={men} className={styles.buttonChoose__imgSex} />
          <div className={styles.buttonChoose__description}>
            <b className={styles.sex}>MEN</b>
            <p className={styles.products}></p>
          </div>
        </button>
        <button className={styles.buttonChoose}>
          <img src={women} className={styles.buttonChoose__imgSex} />
          <div className={styles.buttonChoose__description}>
            <b className={styles.sex}>WOMEN</b>
            <p className={styles.products}></p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default MenOrWomenCategory;
