import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [
        { id: 1, name: 'Item 1', price: 100, quantity: 1, totalPrice: 100, terms: 'Terms for Item 1.', },
        { id: 2, name: 'Item 2', price: 150, quantity: 1, totalPrice: 150, terms: 'Terms for Item 2.', },
        { id: 3, name: 'Item 3', price: 200, quantity: 1, totalPrice: 200, terms: 'Terms for Item 3.', },
        { id: 4, name: 'Item 4', price: 250, quantity: 1, totalPrice: 250, terms: 'Terms for Item 4.', },
        { id: 5, name: 'Item 5', price: 300, quantity: 1, totalPrice: 300, terms: 'Terms for Item 5.', },
        { id: 6, name: 'Item 6', price: 350, quantity: 1, totalPrice: 350, terms: 'Terms for Item 6.', },
        { id: 7, name: 'Item 7', price: 400, quantity: 1, totalPrice: 400, terms: 'Terms for Item 7.', },
        { id: 8, name: 'Item 8', price: 450, quantity: 1, totalPrice: 450, terms: 'Terms for Item 8.', },
        { id: 9, name: 'Item 9', price: 500, quantity: 1, totalPrice: 500, terms: 'Terms for Item 9.', },
        { id: 10, name: 'Item 10', price: 550, quantity: 1, totalPrice: 550, terms: 'Terms for Item 10.', },
    ],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.totalAmount += newItem.price;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
