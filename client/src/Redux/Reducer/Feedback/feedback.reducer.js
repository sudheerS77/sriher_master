import { GET_FEEDBACK, GET_SPECIFIC_FEEDBACK, ADD_FEEDBACK, ADD_FACULTY_FEEDBACK, DELETE_FEEDBACK, UPDATE_FACULTY_FEEDBACK, GET_FACULTY_FEEDBACK } from "./feedback.type";

const INITIAL_STATE = {
    feedback: []
};

const feedbackReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            };
        case GET_FACULTY_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            };
        case ADD_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            };
        case ADD_FACULTY_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            };
        case GET_SPECIFIC_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            };
        case DELETE_FEEDBACK:
            const newData = state.feedback.data.filter(data => data._id !== action.payload.data?._id)
            return {
                //state.items.filter((item, index) => index !== action.payload)
                FEEDBACK: newData
            };
        case UPDATE_FACULTY_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            };              
        default:
            return {
                ...state,
            };
    }
};

export default feedbackReducer;

