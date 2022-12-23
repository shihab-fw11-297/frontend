import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

const saveData=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}

export function authReducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case LOGIN_START:
            return {
                user: null,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            saveData("user", payload)
            return {
                user: payload,
                loading: false,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                user: null,
                loading: false,
                error: payload,
            };
        case LOGOUT:
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};