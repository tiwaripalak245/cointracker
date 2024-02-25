import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from './crypto/cryptoSlice'
import coinReducer from './crypto/coinSlice'


const store = configureStore({
    reducer: {crypto: cryptoReducer,
tradecoins: coinReducer,},

})

export default store;