import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import cartReducer from "../redux/cartSlice";
import categoriesReducer from "./categoriesSlice/categoriesSlice";
import productsReducer from "./productSlice";
// import recommendedReducer from "./recommended/recommendedSlice";

const reducers = combineReducers({
  // ... recomendados / categorias / productos / carrito / user
  categories: categoriesReducer,
  products: productsReducer,
//   recommended: recommendedReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);