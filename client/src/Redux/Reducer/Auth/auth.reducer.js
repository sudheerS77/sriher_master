import { ERROR, SIGN_IN, SIGN_UP } from "./auth.type";
const INITIAL_STATE = {};
const error = {};

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
            };
        case SIGN_UP:  
            return {
                ...state,
            };
        case ERROR:  
            return {
                ...state,
                error: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AuthReducer;