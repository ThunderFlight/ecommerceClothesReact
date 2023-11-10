import Footer from '@/components/ui/Footer/Footer.tsx';
import Header from '@/components/ui/Header/Header.tsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default RootLayout;