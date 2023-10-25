import BannerShopCollection from "./components/BannerShopCollection/BannerShopCollection";
import EveryDayCollection from "./components/EveryDayCollection/EveryDayCollection";
import Header from "./components/Header/Header";
import NewCollectionTshirts from "./components/NewCollectionTshirts/NewCollectionTshirts";
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
      </main>
    </div>
  );
}

export default App;
