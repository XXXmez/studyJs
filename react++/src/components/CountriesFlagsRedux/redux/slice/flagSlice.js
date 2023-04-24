import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchFlags = createAsyncThunk("flags/fetchFlags", async () => {
//   const res = await axios.get("https://restcountries.com/v3.1/all");
//   return res.data;
// });
export const fetchFlagByName = createAsyncThunk(
  "flags/fetchFlagByName",
  async (name) => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return res.data;
  }
);

export const flagSlice = createSlice({
  name: "flag",
  initialState: {
    data: [],
    loading: false,
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlagByName.pending, (state) => {
        state.status = "load";
        state.loading = true;
      })
      .addCase(fetchFlagByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFlagByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { setFilter } = flagSlice.actions;

export default flagSlice.reducer;
