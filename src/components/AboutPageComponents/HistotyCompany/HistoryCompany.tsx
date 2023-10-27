import UnderLine from "@components/ui/UnderLine/UnderLine";
import styles from "./HistoryCompany.module.scss";

const HistoryCompany = () => {
  return (
    <section className={styles.historyCompany}>
      <h1 className={styles.historyCompany__title}>How it Started</h1>
      <UnderLine color="black" />
      <p className={styles.historyCompany__littleDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec
        <br /> ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className={styles.historyCompany__history}>
        <div className={styles.historyDescription}>
          <div className={styles.historyDescription__wrapperText}>
            <h1 className={styles.title}>
              Vel mauris molestie dignissim
            </h1>
            <h2 className={styles.subtitle}>
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </h2>
            <p className={styles.description}>
              Praesent vel faucibus ligula. Sed sit amet ipsum eget velit
              aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar
              sit amet vitae augue. Phasellus nec ultricies arcu. Quisque
              efficitur tellus sit amet bibendum molestie. Duis id egestas odio.
              Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
          </div>
        </div>
        <div className={styles.historyImage}></div>
      </div>
    </section>
  );
};

export default HistoryCompany;
