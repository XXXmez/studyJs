import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlags = createAsyncThunk("flags/fetchFlags");

export const todoSlice = createSlice({
  name: "flags",
  initialState: {
    data: [],
    filterData: [],
    loading: false,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filterData = [...state.data];
      if (action.payload === "") {
        return;
      }
      state.filterData = [...state.data].filter(
        (el) => el.flag === action.payload
      );
    },
  },
  extraReducers: (builder) => {},
});

export const { setFilter } = todoSlice.actions;

export default todoSlice.reducer;
