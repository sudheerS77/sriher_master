import { ADD_USER, ALL_USERS, CLEAR_USER, DELETE_USER, GET_SPECIFIC_USER, GET_USERS, SELF, UPDATE_USER  } from "./user.type";

const INITIAL_STATE = {
    user: {},
    allUsers: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_USERS:
            return {
                ...state,
                //user: action.payload,
            };
        case GET_SPECIFIC_USER:
            return {
                ...state,
                user: action.payload,
            };
        case ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
            };
        case ADD_USER:
            return {
                ...state,
                user: action.payload,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case DELETE_USER:
            return {
                ...state,
                allUsers: action.payload,
            };
        case SELF:
            return {
                ...state,
                user: action.payload,
            };
        case CLEAR_USER:
            return [];
               
        default:
            return {
                ...state,
            };            
    }
};

export default userReducer;