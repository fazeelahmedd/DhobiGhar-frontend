import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from 'redux-thunk';
import userSlice from '../Slices/User/index';
import cartSlice from "../Slices/Cart/index";

const userPersistConfig = {
    key: 'user',
    storage: AsyncStorage,
}

const cartPersistConfig = {
    key: 'cart',
    storage: AsyncStorage,
    blacklist: ['items']
}

const userPersistedReducer = persistReducer(userPersistConfig, userSlice)
const cartPersistedReducer = persistReducer(cartPersistConfig, cartSlice)

const persistedReducer = combineReducers({ user: userPersistedReducer, cart: cartPersistedReducer })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)