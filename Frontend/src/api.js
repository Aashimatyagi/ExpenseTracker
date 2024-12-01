import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const fetchIncomes = () => API.get("/api/income");
export const createIncome = (newIncome) => API.post("/api/income", newIncome);
export const updateIncome = (id, updatedIncome) =>
  API.put(`/api/income/${id}`, updatedIncome);
export const deleteIncome = (id) => API.delete(`/api/income/${id}`);

export const fetchExpenses = () => API.get("/api/expense");
export const createExpense = (newExpense) =>
  API.post("/api/expense", newExpense);
export const updateExpense = (id, updatedExpense) =>
  API.put(`/api/expense/${id}`, updatedExpense);
export const deleteExpense = (id) => API.delete(`/api/expense/${id}`);

export const fetchStats = () => API.get("/api/stats");
