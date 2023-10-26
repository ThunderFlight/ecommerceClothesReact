import styles from "./EveryDayCollection.module.scss";
import collection01 from "@assets/collection-01.jpg";
import collection02 from "@assets/collection-02.jpg";
import Button from "@components/ui/Button/Button";


const EveryDayCollection = () => {
  return (
    <section className={styles.everyDayCollection}>
      <div className={styles.everyDayCollection__leftSideImage}>
        <img className={styles.preViewImage} src={collection02} />
        <div className={styles.description}>
          <p className={styles.description__sex}>MEN</p>
          <h1 className={styles.description__collection}>
            The base collection - Ideal <br /> every day.
          </h1>
          <Button children="Shop Now" size="default" />
        </div>
      </div>
      <img
        src={collection01}
        className={styles.EveryDayCollection__rightSideImage}
      />
    </section>
  );
};

export default EveryDayCollection