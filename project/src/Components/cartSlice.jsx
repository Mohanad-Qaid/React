import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItem: []
};
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingOne = state.cartItem.find((item) => item.id === action.payload.id);
            if (existingOne) { existingOne.quantity += 1; }
            else { state.cartItem.push({ ...action.payload, quantity: 1 }) }
        },
        removeFromCart(state, action) {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload.id);
        },
        clearCart(state) {
            state.cartItem = [];
        },
        increasingQuantity(state, action) {
            const increasing = state.cartItem.find((item) => item.id === action.payload.id);
            if (increasing) { increasing.quantity += 1; }
        },
        decreasingQuantity(state, action) {
            const decreasing = state.cartItem.find((item) => item.id === action.payload.id);
            if (decreasing && decreasing.quantity > 1) { decreasing.quantity -= 1; }
        }
    }
});
export const { addToCart, removeFromCart, clearCart, increasingQuantity, decreasingQuantity } = CartSlice.actions;
export default CartSlice.reducer;