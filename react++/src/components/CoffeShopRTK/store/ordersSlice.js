import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    value: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export default ordersSlice.reducer;
