import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addBasket: (state, action) => {
      if (state.find((el) => el.id === action.payload.id)) {
        state = state.map((el) =>
          el.id === action.payload.id ? { ...el, count: el.count++ } : el
        );
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    deleteBasket: (state, action) => {
      if (action.payload.count === 1) {
        console.log("равен");
        // state = state.filter((el) => el.id !== action.payload.id);
        state.splice(
          state.findIndex((el) => el.id === action.payload.id),
          1
        );
      }
      if (action.payload.count > 1) {
        state = state.map((el) =>
          el.id === action.payload.id ? { ...el, count: el.count-- } : el
        );
      }
    },
  },
});

export const { addBasket, deleteBasket } = basketSlice.actions;

export default basketSlice.reducer;
