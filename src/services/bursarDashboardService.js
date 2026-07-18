import api from "../config/axios";

export const fetchDashboardStats = async () => {
  const res = await api.get("/bursar/stats");
  return res.data;
};
