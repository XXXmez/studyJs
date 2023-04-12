import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import dataSlice from "./dataSlice";
import ordersSlice from "./ordersSlice";

export default configureStore({
  reducer: {
    data: dataSlice,
    basket: basketSlice,
    orders: ordersSlice,
  },
});
