const API_ROOT = 'http://localhost:8000/api/v1';

export const APIUrls = {
  login : () => `${API_ROOT}/branch/login`,
  getBranches : () => `${API_ROOT}/customer/branches`,
};
