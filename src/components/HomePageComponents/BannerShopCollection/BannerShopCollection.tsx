import styles from "./BannerShopCollection.module.scss";
import woman from "@assets/hero.png";
import Button from "@components/ui/Button/Button";

const BannerShopCollection = () => {
  return (
    <section className={styles.bannerShopCollection}>
      <div className={styles.bannerShopCollection__wrapperCheckCollection}>
        <p className={styles.title}>WOMEN</p>
        <h1 className={styles.description}>
          Slick. Modern.
          <br /> Awesome.
        </h1>
        <Button children='Shop Collection' size="default"/>
      </div>
      <div className={styles.bannerShopCollection__wrapperBannerImage}>
        <img
          src={woman}
          className={styles.bannerImage}
          alt="model with t-shirt"
        />
      </div>
    </section>
  );
};

export default BannerShopCollection