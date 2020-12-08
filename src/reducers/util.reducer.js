import { UTIL } from '../actions/actiontypes';

const initialState = {
    loading : false,

}

const utilReducer = (state = initialState, action) => {
	switch (action.type) {
        case UTIL.LOADING : {
            return {...state,
                loading: action.value
            }
        }
		default:
			return state;
	}
}

export default utilReducer;