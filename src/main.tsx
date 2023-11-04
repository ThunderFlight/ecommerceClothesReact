import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import { clothesApi } from "./store/slice/apiSlice.ts";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      {/* <ApiProvider api={clothesApi}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </ApiProvider> */}
    </Provider>
);
