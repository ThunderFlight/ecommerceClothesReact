import BannerShopCollection from "./components/BannerShopCollection/BannerShopCollection";
import EveryDayCollection from "./components/EveryDayCollection/EveryDayCollection";
import Header from "./components/Header/Header";
import MenOrWomenCategory from "./components/MenOrWomenCategory/MenORWomenCategory";
import NewCollectionTshirts from "./components/NewCollectionTshirts/NewCollectionTshirts";
import OnSaleSummerCollection from "./components/OnSaleSummerCollection/OnSaleSummerCollection";
import ReviewsProduct from "./components/ReviewsProduct/ReviewsProduct";
import SeasonCollectionPopularTshirts from "./components/SeasonCollectionPopularTshirts/SeasonCollectionPopularTshirts";
import SpringSummerCollection from "./components/SpringSummerCollection/SpringSummerCollection";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <BannerShopCollection></BannerShopCollection>
        <SeasonCollectionPopularTshirts></SeasonCollectionPopularTshirts>
        <EveryDayCollection></EveryDayCollection>
        <NewCollectionTshirts></NewCollectionTshirts>
        <SpringSummerCollection></SpringSummerCollection>
        <OnSaleSummerCollection></OnSaleSummerCollection>
        <ReviewsProduct></ReviewsProduct>
        <MenOrWomenCategory></MenOrWomenCategory>
      </main>
    </div>
  );
}

export default App;
