import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items : []
};


export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addProduct(state, action){
            state.items = [...state.items, action.payload];
        }
    }
});

export const { addProduct } = cartSlice.reducer;
export default cartSlice.reducer;