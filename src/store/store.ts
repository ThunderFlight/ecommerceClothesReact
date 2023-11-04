import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/usersSlice'
import baseApi from "./services/baseApi";
export const  store = configureStore({
    reducer: {
        users: userReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (gDM) => gDM().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch