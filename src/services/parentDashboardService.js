import api from "../config/axios";

export const getParentDashboard = async () => {
  const res = await api.get(
    "/parent-dashboard/stats"
  );
  return res.data;
};