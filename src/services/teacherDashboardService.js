import api from "../config/axios";

export const getTeacherDashboard = async () => {
  const res = await api.get(
    "/teacher-dashboard/stats"
  );
  return res.data;
};