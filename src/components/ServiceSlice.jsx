import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        service: []    
    }
  
export const ServiceSlice = createSlice({
  name: "service",
  initialState,
  
  reducers: {

    setService: (state, action) => {
        return {
            ...state,
            service: [
                ...state.service,
                ...action.payload
            ]
        }
    },
        
        
  }
});

export const {setService} = ServiceSlice.actions;

export default ServiceSlice.reducer;