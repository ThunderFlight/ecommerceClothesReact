import styles from './ProductList.module.scss';
import Loader from '@/components/ui/Loader/Loader';
import { ProductPreView } from '@/components/ui/productPreView/ProductPreView';
import { Clothes } from '@/store/types';
import { FC } from 'react';

export interface ProductListProps {
  filterCategory: string;
  isLoading: boolean;
  clothList: Clothes[] | undefined;
}

const ProductList: FC<ProductListProps> = ({ filterCategory, clothList, isLoading }) => {

  return (
    <section className={styles.productList}>
      {clothList &&
        clothList.filter((itemCategory) => filterCategory === '' ? itemCategory : itemCategory.category.slice(0, 3) === filterCategory).map((itemProductElement) => (
          <Loader isLoading={isLoading} key={itemProductElement.id}>
            <ProductPreView
              sizeImage='large'
              name={itemProductElement.title}
              image={itemProductElement.image}
              gender={itemProductElement.category}
              price={itemProductElement.price}
            />
          </Loader>
        ))}
    </section>
  );
};

export default ProductList;