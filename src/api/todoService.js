import axios from "axios";

const API_BASE_URL = "http://localhost:5122/api/todo";

// 查询1个 ToDo 项目
export const getTodo = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  };

// 查询所有 ToDo 项目
export const getTodos = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  };
  
// 创建一个新的 ToDo 项目
export const createTodo = async (todo) => {
  const response = await axios.post(API_BASE_URL, todo, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// 更新指定 ID 的 ToDo 项目
export const updateTodo = async (id, todo) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, todo, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// 删除指定 ID 的 ToDo 项目
export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
