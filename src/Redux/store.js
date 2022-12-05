import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import {persistStore,persistReducer,} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import RootReducer from './RootReduces';

const persistConfig = {
  key: "persist-store",
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
export const persistor = persistStore(store)