import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },

  reducers: {
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    deleteAlert: (state, action) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
  },
});

export const handlerAddAlert = (value, delay) => (dispatch) => {
  dispatch(addAlert(value));

  setTimeout(() => {
    dispatch(deleteAlert(value.id));
  }, delay);
};

export const { addAlert, deleteAlert } = alertSlice.actions;

export default alertSlice.reducer;
