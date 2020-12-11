import baseAPI from './app/common/apiManagement/basicApi';
import module1Api from './app/modules/module1/module1Api';
import module2Api from './app/modules/module2/module2Api';

const API = {
  ...baseAPI,
  ...module1Api,
  ...module2Api,
};

const REQUSET_HEADER = {
  APP_NAME: 'app-name',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  API_KEY: 'app-api-key',
};

export default API;
export { REQUSET_HEADER };
