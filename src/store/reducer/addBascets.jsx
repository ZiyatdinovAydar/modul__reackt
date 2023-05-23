import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bascet: [],
    countProductInBascet: 0,
    allPriceProductsBascet: 0,
}
console.log(initialState);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        addBascet: (state, payload) => {
            const itemInCard = state.bascet.find((item) => item.id === payload.payload.id)
            if (itemInCard) {
                state.bascet.payload = 1;
            } else {
                state.bascet.push({...payload.payload})
            }
            
            state.countProductInBascet = state.bascet.length
            state.allPriceProductsBascet = state.bascet.reduce((sum, current) => {
                return sum + current.price
            }, 0)
        },
        

        removeCardBascet: (state, action) => {
            state.bascet = state.bascet.filter((item) => {
                return item.id !== action.payload
            })
            state.countProductInBascet = state.bascet.length

            state.allPriceProductsBascet = state.bascet.reduce((sum, current) => {
                return sum + current.price
            }, 0)
        },

        removeAllBascet: (state) => {
            state.bascet = []
       
            state.countProductInBascet = state.bascet.length

            state.allPriceProductsBascet = state.bascet.reduce((sum, current) => {
                return sum + current.price
            }, 0)
        }
    } 
    
})  
console.log(productsSlice);
export const {addBascet, removeCardBascet, removeAllBascet} = productsSlice.actions;

export default productsSlice.reducer;

