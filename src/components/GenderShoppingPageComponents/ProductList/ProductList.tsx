import styles from './ProductList.module.scss'
import Loader from '@/components/ui/Loader/Loader';
import { ProductPreView } from '@/components/ui/productPreView/ProductPreView';
import { Clothes } from '@/store/types';
import { FC } from 'react';

export interface ProductListProps {
    filterCategory: string
    isLoading:boolean
    clothList: Clothes[] | undefined
}

const ProductList:FC<ProductListProps> = ({filterCategory, clothList, isLoading}) => {

    return (
        <section className={styles.productList}>
            {clothList &&
            clothList.filter((item) => filterCategory === '' ? item : item.category.slice(0,3) === filterCategory).map((item) => (
                <Loader isLoading={isLoading} key={item.id}>
                <ProductPreView
                sizeImage="large"
                name={item.title}
                image={item.image}
                gender={item.category}
                price={item.price}
                />
            </Loader>
            ))}
        </section>
    )
}

export default ProductList;