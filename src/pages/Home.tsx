
import BannerShopCollection from "@/components/HomePageComponents/BannerShopCollection/BannerShopCollection";
import EveryDayCollection from "@/components/HomePageComponents/EveryDayCollection/EveryDayCollection";
import MenOrWomenCategory from "@/components/HomePageComponents/MenOrWomenCategory/MenORWomenCategory";
import NewCollectionTshirts from "@/components/HomePageComponents/NewCollectionTshirts/NewCollectionTshirts";
import ReviewsProduct from "@/components/HomePageComponents/ReviewsProduct/ReviewsProduct";
import SpringSummerCollection from "@/components/HomePageComponents/SpringSummerCollection/SpringSummerCollection";
import GalleryProductItems from "@/components/ui/GalleryProductItems/GalleryProductItems";

const HomePage = () => {
  return (
    <main>
      <BannerShopCollection />
      <GalleryProductItems title="Popular T-Shirts" sizeImage="default"/>
      <EveryDayCollection />
      <NewCollectionTshirts />
      <SpringSummerCollection />
      <GalleryProductItems title="On Sale T-Shirts" sizeImage="default"/>
      <ReviewsProduct />
      <MenOrWomenCategory />
    </main>
  );
};

export default HomePage;
