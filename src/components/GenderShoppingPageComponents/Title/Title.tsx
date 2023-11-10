import { FC } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  filterList: string;
  setFilterList: (value: string) => void;
  title: string;
}

const Title: FC<TitleProps> = ({ title, setFilterList, filterList }) => {
  return (
    <section className={styles.descriptionCategory}>
      <h1 className={styles.descriptionCategory__title}>{title}</h1>
      <div className={styles.descriptionCategory__quantityItemsAndTypeSort}>
        <p className={styles.quantity}>Showing all results</p>
        <select className={styles.typeSort} onChange={(event) => setFilterList(event.target.value)} value={filterList}>
          <option>Default sorting</option>
          <option>Sort by popularity</option>
          <option>Sort by average rating</option>
          <option>Sort by latest</option>
          <option>Sort by: low to high</option>
          <option>Sort by: high to low</option>
        </select>
      </div>
    </section>
  );
};

export default Title;