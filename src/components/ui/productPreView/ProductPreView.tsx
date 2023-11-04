import { FC } from "react";
import styles from "./ProductPreView.module.scss";
import { ProductPreViewProps } from "@/globalTypes/globalTypes";

export const ProductPreView:FC<ProductPreViewProps> = ({sizeImage, name, price, gender, image}) => {
  return (
    <div className={styles.productPreView}>
      <img
        className={styles[sizeImage]}
        src={image}
        alt="item product"
      />
      <div className={styles.productPreView__descriptionProduct}>
        <p className={styles.descriptionProduct__sexProduct}>{gender.toUpperCase()}</p>
        <h2 className={styles.descriptionProduct__nameProduct}>
          {name}
        </h2>
        <p className={styles.descriptionProduct__priceProduct}>{price}$</p>
      </div>
    </div>
  );
};
