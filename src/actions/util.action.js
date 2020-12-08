import axios from 'axios';
import { ROUTES } from '../constants/routes';
import { UTIL } from './actiontypes';


export const getUsersAPI = () => dispatch => {
    let req_data = {
        headers: {

        },
        params: {
      
        }
      }
      axios.get(ROUTES.GET_USERS, req_data)
          .then(res => {
             let users = res && res.data && res.data.results ? res.data.results : [];
             let action = {};
             action.type = UTIL.GET_USERS;
             action.value = users;
             dispatch(action);
          }).catch(err => {
            console.log(err);
        })    
}
export const fetchMoreUsersAPI = (users,pg_count) => dispatch => {
    let fetch_action = {};
    fetch_action.type = UTIL.FETCHING;
    fetch_action.value = true;
    dispatch(fetch_action);

    console.log(pg_count);
    let req_data = {
        headers: {

        },
        params: {
      
        }
      }
      axios.get(ROUTES.GET_USERS + '?page=' + pg_count, req_data)
          .then(res => {
             let new_users = res && res.data && res.data.results ? res.data.results : [];
             let appended_users = JSON.parse(JSON.stringify(users)).concat(new_users);
             console.log(appended_users);
             let action = {};
             action.type = UTIL.APPEND_USERS;
             action.value = appended_users;
             action.pg_count = pg_count;
             dispatch(action);
            fetch_action.value = false;
            dispatch(fetch_action);
          }).catch(err => {
            fetch_action.value = false;
            dispatch(fetch_action);
            alert("Error fetching the results, try again");
        })    
}