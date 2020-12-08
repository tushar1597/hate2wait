import axios from 'axios';
// import { ROUTES } from '../constants/routes';
import { UTIL } from './actiontypes';

export const setPageTab = () => dispatch => {
    let tab = FUNCTIONS.tabMapper();
    let action = {};
    action.type = UTIL.SET_PAGE_TAB;
    action.tab = tab;
    dispatch(action);    
}
