import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "flag",
  initialState: {
    data: [],
  },
  reducers: {
    addLink: (state, action) => {
      state.data.push(action.payload);
    },
    deleteLast: (state) => {
      state.data.pop();
    },
  },
});

export const { addLink, deleteLast } = historySlice.actions;

export default historySlice.reducer;
