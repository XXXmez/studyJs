import axios from "axios";

const URL_API = "https://63b861926f4d5660c6d53d00.mockapi.io/todoRedaxApi";

const instance = axios.create({
  baseURL: URL_API,
  timeout: 10000,
});

export const fetchTodosApi = async () => {
  const data = await instance.get();
  return data.data;
};

export const addNewTodo = async (text) => {
  const todo = {
    text,
  };
  const post = await instance.post("", todo);
  return post.data;
};

export const dellTodo = async (id) => {
  const post = await instance.delete(`/${id}`);
  return post;
};

export const updateTodo = async (id, todo) => {
  const post = await instance.put(`/${id}`, todo);
  return post;
};
