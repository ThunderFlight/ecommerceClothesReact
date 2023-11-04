import Button from "@/components/ui/Button/Button";
import styles from "./SpringSummerCollection.module.scss";
import summerSpringCollectionImage from "@/assets/springSummerCollection.jpg";

const SpringSummerCollection = () => {
  return (
    <section className={styles.springSummerCollection}>
      <div className={styles.springSummerCollection__backgroundRectangle}>
        <div className={styles.aboutCollection}>
          <div className={styles.aboutCollection__colectionPreViewImage}>
            <img
              src={summerSpringCollectionImage}/>
          </div>
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
            <Button name="See Whole Collection" size="default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringSummerCollection;
