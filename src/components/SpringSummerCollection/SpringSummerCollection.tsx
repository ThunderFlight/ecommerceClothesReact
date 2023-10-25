import styles from "./SpringSummerCollection.module.scss";
import summerSpringCollectionImage from "../../assets/springSummerCollection.jpg";
import Button from "../common/Button/Button";

const SpringSummerCollection = () => {
  return (
    <section className={styles.SpringSummerCollection}>
      <div className={styles.SpringSummerCollection__backgroundRectangle}>
        <div className={styles.aboutCollection}>
          <img
            src={summerSpringCollectionImage}
            className={styles.aboutCollection__colectionPreViewImage}
          />
          <div className={styles.aboutCollection__collectionDescription}>
            <p className={styles.sex}>WOMEN</p>
            <h2 className={styles.title}>
              Spring Summer Collection
            </h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
              tempor, congue justo at, lobortis orci. Aliquam venenatis dui
              lectus, eu convallis turpis convallis et. Pellentesque.
            </p>
            <Button children="See Whole Collection" size="default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringSummerCollection;
