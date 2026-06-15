import api from "./api";

/**
 * authService — authentication API calls
 */
const authService = {
  /**
   * Login with email and password
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{user, token}>}
   */
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },

  /**
   * Logout (invalidate token server-side)
   */
  logout: async () => {
    await api.post("/auth/logout");
  },

  /**
   * Get the currently authenticated user
   * @returns {Promise<object>}
   */
  me: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  /**
   * Change password for the authenticated user
   * @param {string} currentPassword
   * @param {string} newPassword
   */
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.post("/auth/change-password", { currentPassword, newPassword });
    return response.data;
  },
};

export default authService;
