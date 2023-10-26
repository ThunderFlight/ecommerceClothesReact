import GalleryProductItems from "@components/ui/GalleryProductItems/GalleryProductItems";
import BannerShopCollection from "@components/HomePageComponents/BannerShopCollection/BannerShopCollection";
import EveryDayCollection from "@components/HomePageComponents/EveryDayCollection/EveryDayCollection";
import MenOrWomenCategory from "@components/HomePageComponents/MenOrWomenCategory/MenORWomenCategory";
import NewCollectionTshirts from "@components/HomePageComponents/NewCollectionTshirts/NewCollectionTshirts";
import ReviewsProduct from "@components/HomePageComponents/ReviewsProduct/ReviewsProduct";
import SpringSummerCollection from "@components/HomePageComponents/SpringSummerCollection/SpringSummerCollection";
import Footer from "@components/ui/Footer/Footer";
import Header from "@components/ui/Header/Header";

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <BannerShopCollection/>
                <GalleryProductItems title="Popular T-Shirts"/>
                <EveryDayCollection/>
                <NewCollectionTshirts/>
                <SpringSummerCollection/>
                <GalleryProductItems title='On Sale T-Shirts'/>
                <ReviewsProduct/>
                <MenOrWomenCategory/>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;