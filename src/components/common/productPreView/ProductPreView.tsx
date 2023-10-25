import styles from "./ProductPreView.module.scss";
import itemProduct from "../../../assets/itemProductPreView.jpg";

export const ProductPreView = () => {
  return (
    <div className={styles.productPreView}>
      <img
        className={styles.productPreView__imageProduct}
        src={itemProduct}
        alt="item product"
      />
      <div className={styles.productPreView__descriptionProduct}>
        <p className={styles.descriptionProduct__sexProduct}>MEN</p>
        <h2 className={styles.descriptionProduct__nameProduct}>
          T-Shirt Name 10
        </h2>
        <p className={styles.descriptionProduct__priceProduct}>12$</p>
      </div>
    </div>
  );
};
