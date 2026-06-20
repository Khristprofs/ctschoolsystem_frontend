import api from "../config/axios";

export const getStudentDashboard = async () => {
  const res = await api.get(
    "/student-dashboard/stats"
  );
  return res.data;
};