import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL_API = "https://63b861926f4d5660c6d53d00.mockapi.io/todoRedaxApi";

export const apiSlice = createApi({
  reducerPath: "todosApi",
  tagTypes: "Todos",
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    updateTodo: builder.mutation({
      query: ({ todoId, todo }) => ({
        url: `/${todoId}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
