import UnderLine from "@/components/ui/UnderLine/UnderLine";
import styles from "./BannerSlogan.module.scss";

const BannerSlogan = () => {
  return (
    <section className={styles.bannerSlogan}>
      <div className={styles.bannerSlogan__backgroundImage}>
        <div className={styles.blackWrapper}></div>
      </div>
      <div className={styles.bannerSlogan__wrapper}>
        <div className={styles.leftSide}>
          <p className={styles.leftSide__title}>THE MISSION</p>
          <h1 className={styles.leftSide__firstTagline}>
            At the heart of
            <br /> everything, we set out to
            <br /> offer the best quality.
          </h1>
          <UnderLine color="white" />
        </div>
        <div className={styles.rightSide}>
          <h2 className={styles.rightSide__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            ante vel mauris molestie dignissim non eget nunc. Integer ac massa
            orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean
            placerat facilisis ex, eu laoreet lorem convallis.
            <br/>
            <br/>
            Fusce gravida
            justo a lectus tempus lacinia. Ut mollis scelerisque ultricies.
            Aenean facilisis efficitur magna, at feugiat massa bibendum at.
            Etiam ut venenatis urna.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerSlogan;
