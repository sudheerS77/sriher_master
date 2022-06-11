import { GET_BROCHURE, GET_SPECIFIC_BROCHURE, ADD_BROCHURE, DELETE_BROCHURE, UPDATE_BROCHURE } from "./brochure.type";

const INITIAL_STATE = {
    brochure: []
};

const brochureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_BROCHURE:
            return {
                ...state,
                brochure: action.payload,
            };
        case GET_SPECIFIC_BROCHURE:
            return {
                ...state,
                brochure: action.payload,
            };
        case ADD_BROCHURE:
            return {
                ...state,
                brochure: action.payload,
            };
        case DELETE_BROCHURE:
            return {
                ...state,
                brochure: action.payload,
            };
         case UPDATE_BROCHURE:
            return {
                ...state,
                brochure: action.payload,
            };
            default:
            return {
                ...state,
            };
    }
};

export default brochureReducer;