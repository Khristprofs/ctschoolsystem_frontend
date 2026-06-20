import api from "../config/axios";

export const fetchStudents = async () => {
  const res = await api.get("/admin/students");
  return res.data.data;
};

export const fetchStudentById = async (id) => {
  const res = await api.get(`/admin/students/${id}`);
  return res.data.data;
};

export const deleteStudent = (id) =>  
  api.delete(`/admin/students/${id}`);

export const updateStudent = (id, data) =>
  api.put(`/admin/students/${id}`, data);

export const createStudent = (data) =>
  api.post("/admin/students", data);
