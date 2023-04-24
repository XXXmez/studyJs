import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlags = createAsyncThunk("flags/fetchFlags", async () => {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  return res.data;
});
export const fetchFlagsByRegion = createAsyncThunk(
  "flags/fetchFlags",
  async (region) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    return res.data;
  }
);

export const dataFlagsSlice = createSlice({
  name: "flags",
  initialState: {
    data: [],
    loading: false,
    status: "",
    error: "",
    filterData: [],
  },
  reducers: {
    setFilterData: (state, action) => {
      state.filterData = [...state.data];
      if (action.payload.region) {
        state.filterData = state.filterData.filter(
          (el) => el.region === action.payload.region
        );
      }
      if (action.payload.name.trim()) {
        state.filterData = state.filterData.filter((el) =>
          el.name.common
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlags.pending, (state) => {
        state.status = "load";
        state.loading = true;
      })
      .addCase(fetchFlags.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.data = action.payload;
        state.filterData = action.payload;
      })
      .addCase(fetchFlags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilterData } = dataFlagsSlice.actions;

export default dataFlagsSlice.reducer;
