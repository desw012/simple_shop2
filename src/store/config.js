import {configureStore} from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import codeReducer from "./slices/codeSlice";

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        code : codeReducer
    }
});