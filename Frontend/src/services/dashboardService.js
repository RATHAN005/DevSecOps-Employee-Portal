import api from "./api";

/**
 * dashboardService — dashboard analytics API calls
 */
const dashboardService = {
  /** Get summary KPI stats */
  getStats: async () => {
    const res = await api.get("/dashboard/stats");
    return res.data;
  },

  /** Get attendance data */
  getAttendance: async (range = "week") => {
    const res = await api.get("/dashboard/attendance", { params: { range } });
    return res.data;
  },

  /** Get recent activity feed */
  getRecentActivity: async (limit = 10) => {
    const res = await api.get("/dashboard/activity", { params: { limit } });
    return res.data;
  },
};

export default dashboardService;
