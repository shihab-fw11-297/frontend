import { NEW_SEARCH,RESET_SEARCH,LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT} from './actionTypes';

export const newSearch = (data) => ({ type: NEW_SEARCH, payload: data });
export const resetSearch = () => ({ type: RESET_SEARCH });
export const loginStart = () => ({ type: LOGIN_START });
export const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const logOut = () => ({ type: LOGOUT });