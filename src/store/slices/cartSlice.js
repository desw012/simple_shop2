import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items : []
};


export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addCart(state, action){
            state.items = [...state.items, action.payload];
        }
    }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;