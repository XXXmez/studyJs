// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 11,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value++;
//     },
//     decrement: (state) => {
//       state.value--;
//     },
//     incrementByAmount: (state, action) => {
//       state.value + action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, { id: uuidv4(), text: action.payload }];
    },
    delTodo: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTodo, delTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
