import { GET_ACHIEVEMENT, ADD_ACHIEVEMENT, DELETE_ACHIEVEMENT, GET_SPECIFIC_ACHIEVEMENT, UPDATE_ACHIEVEMENT } from "./achievements.type";

const INITIAL_STATE = {
    achievements: []
};

const achievementsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_ACHIEVEMENT:
            return {
                ...state,
                achievements: action.payload,
            };    
        case ADD_ACHIEVEMENT:
            return {
                ...state,
                achievements: action.payload,
              };
        case DELETE_ACHIEVEMENT:
            return {
                ...state,
                achievements: action.payload,
              };
        case GET_SPECIFIC_ACHIEVEMENT:
            return {
                ...state,
                achievements: action.payload,
              };
        case UPDATE_ACHIEVEMENT:
            return {
                ...state,
                achievements: action.payload,
              }
        default:
            return {
                ...state,
            };
    }
};

export default achievementsReducer;
