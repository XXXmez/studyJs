import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    region: "",
  },
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setRegion, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
