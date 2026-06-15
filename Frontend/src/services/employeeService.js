import api from "./api";

const mapEmployee = (e) => ({ ...e, id: e._id || e.id });

/**
 * employeeService — CRUD API calls for employees
 */
const employeeService = {
  /** Fetch all employees */
  getAll: async () => {
    const res = await api.get("/employees");
    const items = res.data.employees ? res.data.employees : res.data;
    return items.map(mapEmployee);
  },

  /** Fetch a single employee by ID */
  getById: async (id) => {
    const res = await api.get(`/employees/${id}`);
    return mapEmployee(res.data);
  },

  /** Create a new employee */
  create: async (data) => {
    const res = await api.post("/employees", data);
    return mapEmployee(res.data);
  },

  /** Update an existing employee */
  update: async (id, data) => {
    const res = await api.put(`/employees/${id}`, data);
    return mapEmployee(res.data);
  },

  /** Delete an employee */
  remove: async (id) => {
    await api.delete(`/employees/${id}`);
  },
};

export default employeeService;
