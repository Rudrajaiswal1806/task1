import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        price: {}    
    }
  
export const PriceSlice = createSlice({
  name: "price",
  initialState,
  
  reducers: {

    setPrice: (state, action) => {
        return {
            ...state,
            price: {
                ...state.price,
                ...action.payload
            }
        }
    },
        
        
  }
});

export const {setPrice} = PriceSlice.actions;

export default PriceSlice.reducer;