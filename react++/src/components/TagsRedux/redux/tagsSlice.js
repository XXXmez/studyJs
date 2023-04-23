import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    data: [
      { id: 1, text: "JavaScript" },
      { id: 2, text: "Python" },
    ],
  },
  reducers: {
    addTag: (state, action) => {
      state.data.push({ id: uuidv4(), text: action.payload });
    },
    deleteTag: (state, action) => {
      state.data = state.data.filter((tag) => tag.id !== action.payload);
    },
  },
});

export const { addTag, deleteTag } = tagsSlice.actions;

export default tagsSlice.reducer;
