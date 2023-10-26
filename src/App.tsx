import Footer from "@components/ui/Footer/Footer";
import Header from "@components/ui/Header/Header";
import HomePage from "@pages/HomePage";
import WomenCategory from "@pages/WomenCategory";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/womenCategory" element={<WomenCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
