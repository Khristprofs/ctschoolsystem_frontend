import api from "../config/axios";

export const fetchUsers = async () => {
  const res = await api.get("/admin/users");
  return res.data.data;
};

export const fetchUserById = async (id) => {
  const res = await api.get(`/admin/users/${id}`);
  return res.data.data;
};

export const deleteUser = (id) =>
  api.delete(`/admin/users/${id}`);

export const updateUser = (id, data) =>
  api.put(`/admin/users/${id}`, data);

export const createUser = (data) =>
  api.post("/admin/users", data);
