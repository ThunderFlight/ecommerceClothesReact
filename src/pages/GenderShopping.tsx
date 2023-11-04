import { FC, useEffect, useState } from 'react';
import Title from '@/components/GenderShoppingPageComponents/Title/Title';
import ProductList from '@/components/GenderShoppingPageComponents/ProductList/ProductList';
import { useGetClothesQuery } from '@/store/services/clothes/clothesApi';

interface GenderShoppingProps {
  title: string;
  filterCategory: string
}

const GenderShopping: FC<GenderShoppingProps> = ({ title, filterCategory }) => {
  const { data: clothList, isLoading } = useGetClothesQuery();
  const [filterProduct, setFilterProduct] = useState(clothList);
  useEffect(() => {
    setFilterProduct(clothList)

  }, [clothList])
  const [filterList, setFilterList] = useState('Default sorting');
  console.log(filterProduct);
  console.log(clothList);
  
  useEffect(() => {
    console.log(filterList);
    
    if (clothList && filterList === 'Default sorting') {
      setFilterProduct(clothList)
    }

    if (clothList && filterList === 'Sort by popularity') {
      setFilterProduct(clothList?.slice().sort((a, b) => a.rating.count - b.rating.count))
    }

    if (clothList && filterList === 'Sort by average rating') {
      setFilterProduct(clothList?.slice().sort((a, b) => a.rating.rate - b.rating.rate))
    }

    if (clothList && filterList === 'Sort by latest') {
      setFilterProduct(clothList?.slice().reverse())
    }

    if (clothList && filterList === 'Sort by: low to high') {
      setFilterProduct(clothList?.slice().sort((a, b) => a.price - b.price))
    }

    if (clothList && filterList === 'Sort by: high to low') {
      setFilterProduct(clothList?.slice().sort((a, b) => b.price - a.price))
    }
    
  }, [filterList])
  
  return (
    <main>
      <Title title={title} filterList={filterList} setFilterList={setFilterList}/>
      <ProductList filterCategory={filterCategory} clothList={filterProduct} isLoading={isLoading}/>
    </main>
  );
};

export default GenderShopping;
