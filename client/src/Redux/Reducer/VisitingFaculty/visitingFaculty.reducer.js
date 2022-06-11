import { GET_VISITINGFACULTY, GET_SPECIFIC_VISITINGFACULTY, ADD_VISITINGFACULTY, DELETE_VISITINGFACULTY, UPDATE_VISITINGFACULTY } from "./visitingFaculty.type";

const INITIAL_STATE = {
    faculty: []
};

const visitingFacultyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_VISITINGFACULTY:
            return {
                ...state,
                faculty: action.payload,
            };
        case ADD_VISITINGFACULTY:
            return {
                ...state,
                faculty: action.payload,
            };
            case GET_SPECIFIC_VISITINGFACULTY:
                return {
                    ...state,
                    faculty: action.payload,
                };
        case DELETE_VISITINGFACULTY:
            return {
                ...state,
                faculty: action.payload,
            };
        case UPDATE_VISITINGFACULTY:
            return {
                ...state,
                faculty: action.payload,
            };              
        default:
            return {
                ...state,
            };
            break;
    }
};

export default visitingFacultyReducer;
