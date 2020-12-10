const API = {
  SAMPLE: {
    apiKey: 'SAMPLE',
    endpoint: `${window.SERVER_DATA.apiHost}/sample`,
    type: 'GET',
    authenticated: true,
    showLoading: true,
  },
};

const REQUSET_HEADER = {
  APP_NAME: 'app-name',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  API_KEY: 'app-api-key',
};

export default API;
export { REQUSET_HEADER };
