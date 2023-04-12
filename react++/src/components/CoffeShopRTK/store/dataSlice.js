import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: [
    { id: 1, name: "Espresso", price: 130 },
    { id: 2, name: "Cappuccino", price: 160 },
    { id: 3, name: "Coffeetur", price: 200 },
  ],
});

export default dataSlice.reducer;
