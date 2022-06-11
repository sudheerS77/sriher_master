import { GET_FACULTY, GET_SPECIFIC_FACULTY, ADD_FACULTY, DELETE_FACULTY, UPDATE_FACULTY } from "./faculty.type";

const INITIAL_STATE = {
    faculty: []
};

const facultyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_FACULTY:
            return {
                ...state,
                faculty: action.payload,
            };
        case ADD_FACULTY:
            return {
                ...state,
                faculty: action.payload,
            };
            case GET_SPECIFIC_FACULTY:
                return {
                    ...state,
                    faculty: action.payload,
                };
        case DELETE_FACULTY:
            const newData = state.faculty.data.filter(data => data._id !== action.payload.data?._id)
            console.log(state.faculty);
            console.log(action.payload);
            console.log(newData);
            return {
                //state.items.filter((item, index) => index !== action.payload)
                faculty: newData
            };
        case UPDATE_FACULTY:
            return {
                ...state,
                faculty: action.payload,
            };              
        default:
            return {
                ...state,
            };
    }
};

export default facultyReducer;

