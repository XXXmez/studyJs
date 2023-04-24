import { configureStore } from "@reduxjs/toolkit";
import dataFlagsSlice, { fetchFlags } from "./slice/dataFlagsSlice";

export const store = configureStore({
  reducer: {
    flags: dataFlagsSlice,
  },
});

store.dispatch(fetchFlags());
