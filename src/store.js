import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./components/ServiceSlice";


export default configureStore({
    reducer: {      
      services: serviceReducer,
             
    },
  });