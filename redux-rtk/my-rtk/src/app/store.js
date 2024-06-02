import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./service/dummyData"

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },

    // Don't Worrie about

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);