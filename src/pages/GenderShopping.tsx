import { FC, useMemo, useState } from 'react';
import Title from '@/components/GenderShoppingPageComponents/Title/Title';
import ProductList from '@/components/GenderShoppingPageComponents/ProductList/ProductList';
import { useGetClothesQuery } from '@/store/services/clothes/clothesApi';
import { Clothes } from '@/store/types.ts';

interface GenderShoppingProps {
  title: string;
  filterCategory: string;
}

interface TypesFilterSelect {
  [ket: string]: string;
}


const GenderShopping: FC<GenderShoppingProps> = ({ title, filterCategory }) => {
  const { data: clothList, isLoading } = useGetClothesQuery();
  const [filterList, setFilterList] = useState('Sort by: low to high');
  const copyClothesList = clothList && Array.from(clothList);

  const filter = useMemo((): Clothes[] | undefined => {
    if (copyClothesList === undefined) {
      return;
    }

    const filterSelect: TypesFilterSelect = {
      'Default sorting': JSON.stringify(copyClothesList),
      'Sort by popularity': JSON.stringify(copyClothesList.sort((a, b) => a.rating.count - b.rating.count)),
      'Sort by average rating': JSON.stringify(copyClothesList.sort((a, b) => b.rating.rate - a.rating.rate)),
      'Sort by latest': JSON.stringify(copyClothesList.reverse()),
      'Sort by: low to high': JSON.stringify(copyClothesList.sort((a, b) => a.price - b.price)),
      'Sort by: high to low': JSON.stringify(copyClothesList.sort((a, b) => b.price - a.price)),
    };

    return JSON.parse(filterSelect[filterList]);
  }, [copyClothesList, filterList]);

  return (
    <>
      <main>
        <Title title={title} filterList={filterList} setFilterList={setFilterList} />
        <ProductList filterCategory={filterCategory} clothList={filter} isLoading={isLoading} />
      </main>
    </>
  );
};

export default GenderShopping;
