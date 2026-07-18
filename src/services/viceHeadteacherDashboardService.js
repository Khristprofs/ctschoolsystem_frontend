import api from "../config/axios";

export const fetchDashboardStats = async () => {
  const res = await api.get("/viceheadtecher-dashboard/stats");
  return res.data;
};
