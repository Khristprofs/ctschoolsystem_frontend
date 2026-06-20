import api from "../config/axios";

export const fetchDashboardStats = async () => {
  const res = await api.get("/admin/stats");
  return res.data;
};
