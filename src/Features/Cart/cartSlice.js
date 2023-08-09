import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        value: {
            user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: []
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            //Logic to add item
            //1. Check productExists
            const productExists = state.value.items.some(item => item.id === action.payload.id)

            //2. Distinct logic if exists product or not
            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            //3. Update total
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )

            //4. Update updatedAt
            state.value.updatedAt = new Date().toLocaleString()
        },
        //5. Remove Item
        removeCartItem: (state, action) => {
            const itemIdToRemove = action.payload;
            
            // Find the index of the item to remove
            const itemIndex = state.value.items.findIndex(item => item.id === itemIdToRemove);
            
            if (itemIndex !== -1) {
              // Remove the item from the array
              state.value.items.splice(itemIndex, 1);


            }
            //Update total Again after remove
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )
          }
          
    }
})

export const {addCartItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer