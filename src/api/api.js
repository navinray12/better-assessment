import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
});
const getTasks = () => API.get("/tasks");
const addTask = (data) => API.post("/tasks", data);
const updateTask = (id, data) =>
  API.put(`/tasks/${id}`, data);
const deleteTask = (id) =>
  API.delete(`/tasks/${id}`);
const getComments = (taskId) =>
  API.get(`/comments/${taskId}`);
const addComment = (taskId, data) =>
  API.post(`/comments/${taskId}`, data);
const updateComment = (id, data) =>
  API.put(`/comments/single/${id}`, data);
const deleteComment = (id) =>
  API.delete(`/comments/single/${id}`);
export {getTasks, addTask,updateTask,deleteTask,getComments,addComment,updateComment,deleteComment};
