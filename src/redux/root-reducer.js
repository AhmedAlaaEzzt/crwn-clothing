import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer"; 

import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key:'root',
    storage, 
    whitelist:['cartReducer']
}

const rootReducer = combineReducers({userReducer, cartReducer,directoryReducer, shopReducer})

export default persistReducer(persistConfig,rootReducer)
