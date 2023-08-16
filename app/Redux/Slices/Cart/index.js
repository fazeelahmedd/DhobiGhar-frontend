import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            if (action?.payload?.length > 0) {
                let cartItems = [...state.items]

                //for checking repitition
                let nonRepeatedItems = action.payload.filter(item => {

                    let alreadyExistItemIndex = cartItems.findIndex(el => el.business_service_product_id === item.business_service_product_id)

                    if (alreadyExistItemIndex < 0) {
                        return item;
                    }

                    if (item.quantity > 0) {
                        cartItems[alreadyExistItemIndex].quantity = item.quantity
                    } else {
                        cartItems.splice(alreadyExistItemIndex, 1)
                    }
                        
                    return;
                })

                //for checking quantity
                let filteredItems = nonRepeatedItems.filter(item => item.quantity != 0)

                state.items = cartItems.concat(filteredItems)
            }
        }
    },
});

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer