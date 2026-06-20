import api from "../config/axios";

export const fetchTeachers = async () => {
  const res = await api.get("/admin/teachers");
  return res.data.data;
};

export const fetchTeacherById = async (id) => {
  const res = await api.get(`/admin/teachers/${id}`);
  return res.data.data;
};

export const deleteTeacher = async (id) => {
  const res = await api.delete(`/admin/teachers/${id}`);
  return res.data;
};

export const updateTeacher = (id, data) =>
  api.put(`/admin/teachers/${id}`, data);

export const fetchTeacherUsers = async () => {
  const res = await api.get("/admin/teacher-users");
  return res.data.data;
};

export const fetchLevels = async () => {
  const res = await api.get("/admin/levels");
  return res.data.data;
};

export const createTeacher = (data) =>
  api.post("/admin/teachers", data);