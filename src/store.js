import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./components/ServiceSlice";
import priceReducer from "./components/PriceSlice";

export default configureStore({
    reducer: {      
      services: serviceReducer,
      pricing:  priceReducer        
    },
  });