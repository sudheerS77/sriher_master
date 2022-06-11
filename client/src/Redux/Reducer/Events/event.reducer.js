import { GET_EVENTS, GET_SPECIFIC_EVENT, DELETE_EVENT, ADD_EVENT, REGISTER_EVENT, GET_ALL_REGISTERED_EVENTS, GET_USER_EVENTS  } from "./event.type";

const INITIAL_STATE = {
    events: [],
    userEvents: {}
};

const eventReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        case GET_SPECIFIC_EVENT:
            return {
                ...state,
                events: action.payload,
            };
        case ADD_EVENT:
            return {
                ...state,
                events: action.payload,
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: action.payload,
            };
        case REGISTER_EVENT:
            return {
                ...state,
                userEvents: action.payload,
            };
        case GET_ALL_REGISTERED_EVENTS:
            return {
                ...state,
                userEvents: action.payload,
            };
        case GET_USER_EVENTS:
            return {
                ...state,
                userEvents: action.payload,
            };              
        default:
            return {
                ...state,
            };            
    }
};

export default eventReducer;