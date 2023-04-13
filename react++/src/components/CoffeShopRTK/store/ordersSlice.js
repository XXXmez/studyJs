import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push({ order: action.payload, id: state.length + 1 });
    },
  },
});

export const { addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
