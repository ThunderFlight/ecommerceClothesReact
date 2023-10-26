import Title from "@components/GenderShoppingPageComponents/Title/Title";
import { ProductPreView } from "@components/ui/productPreView/ProductPreView";
import { FC } from "react";

interface props {
    title: string;
}

const GenderShopping:FC<props> = ({title}) => {
    return (
        <main>
            <Title title={title}/>
            <ProductPreView sizeImage='large'/>
        </main>
    )
}

export default GenderShopping;