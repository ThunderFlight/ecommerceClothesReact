import { FC } from 'react';
import { ProductPreView } from '../productPreView/ProductPreView';
import styles from './GalleryProductItems.module.scss'

interface prop {
    title: string
}

const GalleryProductItems:FC<prop> = ({title='Popular T-Shirts'}) => {
    return (
        <section className={styles.galleryProductItems}>
            <p className={styles.collectionName}>SUMMER COLLECTION</p>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.productItems}>
                <ProductPreView></ProductPreView>
                <ProductPreView></ProductPreView>
                <ProductPreView></ProductPreView>
                <ProductPreView></ProductPreView>
            </div>
        </section>
    )
}

export default GalleryProductItems;