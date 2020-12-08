import { UTIL } from '../actions/actiontypes';

const initialState = {
    loading : false,
    users: [],
    fetched: false,
    pg_count: 1,
}

const utilReducer = (state = initialState, action) => {
	switch (action.type) {
        case UTIL.LOADING : {
            return {...state,
                loading: action.value
            }
        }
        case UTIL.GET_USERS : {
            return {...state,
                users: action.value
            }
        }
        case UTIL.APPEND_USERS : {
            return {...state,
                users: action.value,
                pg_count: action.pg_count,
            }
        }
        case UTIL.FETCHING : {
            return {...state,
                fetched: action.value
            }
        }
        
		default:
			return state;
	}
}

export default utilReducer;