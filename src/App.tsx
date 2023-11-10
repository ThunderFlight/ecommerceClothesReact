import styles from './index.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/Home.tsx';
import GenderShopping from '@/pages/GenderShopping.tsx';
import About from '@/pages/About.tsx';
import Contact from '@/pages/Contact.tsx';
import RootLayout from '@/components/RootLayout/RootLayout.tsx';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/shop',
        element: <GenderShopping title='Shop' filterCategory='' />,
      },
      {
        path: '/womenCategory',
        element: <GenderShopping title='Women' filterCategory='wom' />,
      },
      {
        path: '/menCategory',
        element: <GenderShopping title='Men' filterCategory='men' />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },


]);

function App() {
  return (
    <div className={styles.appWrapper}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
