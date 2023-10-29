import Footer from "@components/ui/Footer/Footer";
import Header from "@components/ui/Header/Header";
import HomePage from "@pages/Home";
import GenderShopping from "@pages/GenderShopping";
import { Routes, Route } from "react-router-dom";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Register from "@components/ui/modals/Register/Register";
import styles from './index.module.scss';
import ModalWrapper from "@components/ui/ModalWrapper/ModalWrapper";

function App() {
  return (
    <div className={styles.appWrapper}>
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
      <ModalWrapper>
        {<Register/>}
      </ModalWrapper>
    </div>
  );
}

export default App;
