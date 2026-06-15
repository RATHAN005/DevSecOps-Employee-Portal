import api from "./api";

/**
 * analyticsService — workforce analytics API calls
 */
const analyticsService = {
  /** Get employee growth over time */
  getGrowth: async (period = "monthly") => {
    const res = await api.get("/analytics/growth", { params: { period } });
    return res.data;
  },

  /** Get department-wise headcount */
  getDepartmentBreakdown: async () => {
    const res = await api.get("/analytics/departments");
    return res.data;
  },

  /** Get leave summary */
  getLeaveSummary: async () => {
    const res = await api.get("/analytics/leave");
    return res.data;
  },

  /** Get turnover and retention metrics */
  getTurnover: async () => {
    const res = await api.get("/analytics/turnover");
    return res.data;
  },
};

export default analyticsService;
