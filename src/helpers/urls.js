const API_ROOT = 'https://scavenger-hunt-api-g.herokuapp.com/api/v1';

export const APIUrls = {
  login : () => `${API_ROOT}/branch/login`,
  getBranches : () => `${API_ROOT}/customer/branches`,
};
