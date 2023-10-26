import styles from "./ReviewsProduct.module.scss";

const ReviewsProduct = () => {
  return (
    <section className={styles.reviewsProduct}>
      <div className={styles.reviewsProduct__wrapper}>
        <h1 className={styles.title}>Reviews</h1>
        <p className={styles.comment}>
          “ Very good quality T-shirts and lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua quis ipsum! ”
        </p>
        <div className={styles.ratingNameCommentator}>
          <ol className={styles.ratingNameCommentator__rating}>
            <li className={styles.star}></li>
            <li className={styles.star}></li>
            <li className={styles.star}></li>
            <li className={styles.star}></li>
            <li className={styles.star}></li>
          </ol>
          <p className={styles.ratingNameCommentator__nameСommentator}>JANE OLIVER</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsProduct;
