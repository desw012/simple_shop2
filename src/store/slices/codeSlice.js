import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isShow : false,
    code : ''
}

export const codeSlice = createSlice({
    name : 'code',
    initialState,
    reducers: {
        showCodePreView(state, action){
            state.isShow = true;
            state.code = action.payload
        },
        hideCodePreView(state, action){
            state.isShow = false;
            state.code = ''
        }
    }
})

export const { showCodePreView, hideCodePreView } = codeSlice.actions;
export default codeSlice.reducer;