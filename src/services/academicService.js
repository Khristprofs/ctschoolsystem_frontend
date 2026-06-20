import api from "../config/axios";

export const fetchAcademicAnalytics = async () => {
  const res = await api.get("/admin/academics/analytics");
  return res.data.data;
};

export const fetchLevels = async () => {
  const res = await api.get("/admin/academics/levels");
  return res.data.data;
};
export const fetchLevelById = async (id) => {
  const res = await api.get(`/admin/academics/levels/${id}`);
  return res.data.data;
};

export const deleteLevel = (id) =>
  api.delete(`/admin/academics/levels/${id}`);

export const updateLevel = (id, data) =>
  api.put(`/admin/academics/levels/${id}`, data);

export const fetchTerms = async () => {
  const res = await api.get("/term/all");
  return res.data.data;
};

export const fetchSessions = async () => {
  const res = await api.get("/session/all");
  return res.data.data;
};

export const createLevel = (data) =>
  api.post("/admin/academics/levels", data);

export const fetchSubjects = async () => {
  const res = await api.get("/admin/academics/subjects");
  return res.data.data;
};
export const deleteSubject = (id) =>
  api.delete(`/subject/${id}/delete`);

export const fetchSubjectById = async (id) => {
  const res = await api.get(`/admin/academics/subjects/${id}`);
  return res.data.data;
};

export const updateSubject = (id, data) =>
  api.put(`/admin/academics/subjects/${id}`, data);

export const createSubjects = (data) =>
  api.post("/admin/academics/subjects", data);

export const fetchAttendance = async () => {
  const res = await api.get("/admin/academics/attendance");
  return res.data.data;
};

export const deleteAttendance = (id) =>
  api.delete(`/attendance/${id}/delete`);

export const fetchAttendanceById = async (id) => {
  const res = await api.get(`/admin/academics/attendance/${id}`);
  return res.data.data;
};

export const updateAttendance = (id, data) =>
  api.put(`/admin/academics/attendance/${id}`, data);

export const createAttendance = async (payload) => {
  const res = await api.post("/admin/academics/attendance", payload);
  return res.data;
};

export const fetchTests = async () => {
  const res = await api.get("/admin/academics/tests");
  return res.data.data;
};

export const deleteTest = (id) =>
  api.delete(`/test/${id}/delete`);

export const fetchTestById = async (id) => {
  const res = await api.get(`/admin/academics/tests/${id}`);
  return res.data.data;
};

export const updateTest = async (id, data) => {
  const res = await api.put(`/admin/academics/tests/${id}`, data);
  return res.data;
};
export const fetchTeachers = async () => {
  const res = await api.get("/admin/teachers");
  return res.data;
};

export const createTest = async (payload) => {
  const res = await api.post("/admin/test", payload);
  return res.data;
};

export const fetchQuizzes = async () => {
  const res = await api.get("/admin/academics/quizzes");
  return res.data.data;
};

export const deleteQuiz = (id) =>
  api.delete(`/quiz/${id}/delete`);

export const fetchQuizById = async (id) => {
  const res = await api.get(`/admin/academics/quizzes/${id}`);
  return res.data.data;
};

export const updateQuiz = async (id, data) => {
  const res = await api.put(`/admin/academics/quizzes/${id}`, data);
  return res.data;
};

export const createQuiz = async (payload) => {
  const res = await api.post("/admin/academics/quizzes", payload);
  return res.data;
};

export const fetchExams = async () => {
  const res = await api.get("/admin/academics/exams");
  return res.data.data;
};

export const deleteExam = (id) =>
  api.delete(`/exam/${id}/delete`);

export const fetchExamById = async (id) => {
  const res = await api.get(`/admin/academics/exams/${id}`);
  return res.data.data;
};

export const updateExam = async (id, data) => {
  const res = await api.put(`/admin/academics/exams/${id}`, data);
  return res.data;
};

export const fetchAssessmentItems = async () => {
  const res = await api.get("/admin/academics/assessment-items");
  return res.data.data;
};

export const deleteAssessmentItem = (id) =>
  api.delete(`/assessmentItem/${id}/delete`);

export const fetchAssessmentItemById = async (id) => {
  const res = await api.get(`/admin/academics/assessment-items/${id}`);
  return res.data.data;
};
export const updateAssessmentItem = async (id, data) => {
  const res = await api.put(`/admin/academics/assessment-items/${id}`, data);
  return res.data;
};

export const fetchAssessmentItemFormData = async () => {
  const response = await api.get("/admin/assessment-items/form-data");
  return response.data;
};

export const createAssessmentItem = async (data) => {
  const response = await api.post("/admin/academics/assessment-items", data);
  return response.data.data;
};