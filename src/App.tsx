import Footer from "@components/ui/Footer/Footer";
import Header from "@components/ui/Header/Header";
import HomePage from "@pages/Home";
import GenderShopping from "@pages/GenderShopping";
import { Routes, Route } from "react-router-dom";
import About from "@pages/About";
import Contact from "@pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<GenderShopping title="Shop"/>} />
        <Route path="/womenCategory" element={<GenderShopping title="Women"/>} />
        <Route path="/menCategory" element={<GenderShopping title="Men"/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
