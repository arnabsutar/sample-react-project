import baseAPI from '../app/common/apiManagement/basicApi';
import { defaultAPI } from '../app/modules/home';

const API = {
  ...baseAPI,
  ...defaultAPI,
};

const REQUSET_HEADER = {
  APP_NAME: 'app-name',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  API_KEY: 'app-api-key',
};

export default API;
export { REQUSET_HEADER };
