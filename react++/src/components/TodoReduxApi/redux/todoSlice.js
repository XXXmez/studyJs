import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodosApi, addNewTodo, dellTodo, updateTodo } from "./todoApi";

export const fetchTodosAsync = createAsyncThunk(
  "todo/fetchTodosAsync",
  async () => {
    const data = await fetchTodosApi();
    return data;
  }
);

export const addNewTodoAsync = createAsyncThunk(
  "todo/addNewTodoAsync",
  async (text) => {
    const post = await addNewTodo(text);
    return post;
  }
);

export const dellTodoAsync = createAsyncThunk(
  "todo/dellTodoAsync",
  async (id) => {
    const post = await dellTodo(id);

    return post.data.id;
  }
);

export const updateTodoAsync = createAsyncThunk(
  "todo/updateTodoAsync",
  async ({ id, todo }) => {
    const post = await updateTodo(id, todo);

    return post.data;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
    status: "",
    error: "",
    delleteTodoId: "",
    updateTodoId: "",
  },
  reducers: {
    // addTodo: (state, action) => {
    //   state.value = [...state.value, action.payload];
    // },
    // delTodo: (state, action) => {
    //   state.value = state.value.filter((el) => el.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewTodoAsync.pending, (state) => {
        state.status = "createdPost";
      })
      .addCase(addNewTodoAsync.fulfilled, (state, action) => {
        state.status = "";
        state.value.push(action.payload);
      })
      .addCase(addNewTodoAsync.rejected, (state, action) => {
        state.status = "failCreatedPost";
        state.error = action.error.message;
      })
      .addCase(dellTodoAsync.pending, (state, action) => {
        state.status = "loadDellTodo";
        state.delleteTodoId = action.meta.arg;
      })
      .addCase(dellTodoAsync.fulfilled, (state, action) => {
        state.status = "";
        const index = state.value.findIndex((el) => el.id === action.payload);
        const newData = [...state.value];
        newData.splice(index, 1);
        state.value = newData;
        state.delleteTodoId = "";
      })
      .addCase(updateTodoAsync.pending, (state, action) => {
        state.status = "loadUpdateTodo";
        state.updateTodoId = action.meta.arg.id;
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        state.value = state.value.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
        state.updateTodoId = "";
      });
  },
});

// export const { addTodo, delTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;
export const selectTodoStatus = (state) => state.todo.status;

export default todoSlice.reducer;
