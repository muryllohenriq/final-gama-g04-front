import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice";

export const store = configureStore({
  reducer: {
    store: storeSlice,    
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;