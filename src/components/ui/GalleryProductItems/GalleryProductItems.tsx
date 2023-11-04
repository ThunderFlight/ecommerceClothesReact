import { FC, memo } from 'react';
import { ProductPreView } from '../productPreView/ProductPreView';
import styles from './GalleryProductItems.module.scss'
import { ProductPreViewProps } from '@/globalTypes/globalTypes';
import { useGetClothesQuery } from '../../../store/services/clothes/clothesApi';

interface prop extends ProductPreViewProps {
    title: string;
    sizeImage: string;
}

const GalleryProductItems:FC<prop> = memo(({title='Popular T-Shirts', sizeImage, name, image, gender, price}) => {
    const {data} = useGetClothesQuery()
    
    console.log(data);
    console.log(sizeImage, name, image, gender, price);
    
    return (
        <section className={styles.galleryProductItems}>
            <p className={styles.collectionName}>SUMMER COLLECTION</p>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.productItems}>
                <ProductPreView sizeImage={sizeImage} name={name} image={image} gender={gender} price={price}/>
            </div>
        </section>
    )
})

export default GalleryProductItems;