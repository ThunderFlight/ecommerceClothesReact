import { FC } from 'react';
import styles from './Title.module.scss'

interface props {
    title:string;
}

const Title:FC<props> = ({title}) => {
    return (
        <section className={styles.descriptionCategory}>
            <h1 className={styles.descriptionCategory__title}>{title}</h1>
            <div className={styles.descriptionCategory__quantityItemsAndTypeSort}>
                <p className={styles.quantity}>Showing all results</p>
                <select className={styles.typeSort}>
                    <option>Default sorting</option>
                    <option>Sort by popularity</option>
                    <option>Sort by average rating</option>
                    <option>Sort by latest</option>
                    <option>Sort by: low to high</option>
                    <option>Sort by: high to low</option>
                </select>
            </div>
        </section>
    )
}

export default Title;