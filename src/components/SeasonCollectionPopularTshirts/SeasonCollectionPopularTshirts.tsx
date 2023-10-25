import { ProductPreView } from "../common/productPreView/ProductPreView";
import styles from "./SeasonCollectionPopularTshirts.module.scss";

const SeasonCollectionPopularTshirts = () => {
  return (
    <section className={styles.popularTshirts}>
      <p className={styles.popularTshirts__collection}>SUMMER COLLECTION</p>
      <h1 className={styles.popularTshirts__title}>Popular T-Shirts</h1>
      <div className={styles.popularTshirts__items}>
        <ProductPreView></ProductPreView>
        <ProductPreView></ProductPreView>
        <ProductPreView></ProductPreView>
        <ProductPreView></ProductPreView>
      </div>
    </section>
  );
};

export default SeasonCollectionPopularTshirts;