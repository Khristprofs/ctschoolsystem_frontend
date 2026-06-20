import api from "../config/axios";

export const fetchAssessments = async () => {
  const response = await api.get("/admin/assessments");
  return response.data.data;
};

export const deleteAssessment = (id) =>
  api.delete(`/assessment/${id}/delete`);

export const fetchAssessmentById = async (id) => {
  const response = await api.get(`/admin/assessments/${id}`);
  return response.data.data;
};

export const updateAssessment = async (id, data) => {
  const response = await api.put(`/admin/assessments/${id}/update`, data);
  return response.data;
};

export const fetchAssessmentFormData = async () => {
  const response = await api.get("/assessment/form-data");
  return response.data;
};

export const getAssessmentFormData = async () => {
  const response = await api.get("admin/assessments/form-data");
  return response.data;
};

export const getStudentItems = async (studentId, subjectId, sessionId, termId) => {
  const response = await api.get("/admin/assessments/student-items",
    {
      params: { studentId, subjectId, sessionId, termId },
    }
  );
  return response.data;
};

export const createAssessment = async (payload) => {
  const response = await api.post("/admin/assessments", payload);
  return response.data;

};