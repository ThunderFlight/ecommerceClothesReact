import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/store/store.ts';
import App from './App.tsx';

const root = document.getElementById('root');

  if (root === null) {
    throw Error('Root not found');
  }


  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App/>
    </Provider>,
  );
