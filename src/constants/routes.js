import { getConfigs } from './configs';

const SERVER_ENDPOINT = getConfigs().SERVER_ENDPOINT + getConfigs().APP_VERSION + '/';

export const ROUTES = {
    USER_LOGIN : SERVER_ENDPOINT + 'user/login',
    GET_USERS : "https://randomuser.me/api",
}