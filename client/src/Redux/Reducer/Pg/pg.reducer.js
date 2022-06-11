import { GET_PG, GET_SPECIFIC_PG, ADD_PG, DELETE_PG, UPDATE_PG } from "./pg.type";

const INITIAL_STATE = {
    PG: []
};

const pgReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_PG:
            return {
                ...state,
                PG: action.payload,
            };
        case ADD_PG:
            return {
                ...state,
                PG: action.payload,
            };
            case GET_SPECIFIC_PG:
                return {
                    ...state,
                    PG: action.payload,
                };
        case DELETE_PG:
            return {
                ...state,
                PG: [state.PG, action.payload],
            };
        case UPDATE_PG:
            return {
                ...state,
                PG: [state.PG, action.payload],
            };             
        default:
            return {
                ...state,
            };
            break;
    }
};

export default pgReducer;
