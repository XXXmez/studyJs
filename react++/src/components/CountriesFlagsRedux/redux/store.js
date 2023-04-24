import { configureStore } from "@reduxjs/toolkit";
import dataFlagsSlice, { fetchFlags } from "./slice/dataFlagsSlice";
import filterSlice from "./slice/filterSlice";
import flagSlice from "./slice/flagSlice";
import historySlice from "./slice/historySlice";

export const store = configureStore({
  reducer: {
    flags: dataFlagsSlice,
    flag: flagSlice,
    history: historySlice,
    filters: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});

store.dispatch(fetchFlags());
