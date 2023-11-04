import Title from "@/components/GenderShoppingPageComponents/Title/Title";
import { ProductPreView } from "@/components/ui/productPreView/ProductPreView";
import { FC } from "react";
import { useGetClothesQuery } from "../store/services/clothes/clothesApi";
import Loader from "@/components/ui/Loader/Loader";

interface GenderShoppingProps {
  title: string;
}

const GenderShopping: FC<GenderShoppingProps> = ({ title }) => {
  const { data:clothList, isLoading } = useGetClothesQuery();
  console.log(clothList);

  return (
    <main>
      <Title title={title} />
      <Loader isLoading={isLoading}>
      {
        clothList && clothList.map((item) =>
            <ProductPreView
            key={item.id}
            sizeImage="large"
            name={item.title}
            image={item.image}
            gender={item.category}
            price={item.price}
            />
        )
      }
      </Loader>
    </main>
  );
};

export default GenderShopping;
