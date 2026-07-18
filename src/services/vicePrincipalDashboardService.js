import api from "../config/axios";

export const fetchDashboardStats = async () => {
  const res = await api.get("/viceprincipal-dashboard/stats");
  return res.data;
};
