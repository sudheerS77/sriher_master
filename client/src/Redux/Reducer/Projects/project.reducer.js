import { GET_PROJECT, GET_SPECIFIC_PROJECT, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "./project.type";

const INITIAL_STATE = {
    projects: [],
    demo: []
};

const projectReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload,
            };
        case GET_SPECIFIC_PROJECT:
            return {
                ...state,
                projects: action.payload,
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: action.payload,
            };
        case DELETE_PROJECT:
            // console.log(action.payload);
            // console.log(state.projects.projects);
            alert(action.payload.data.message);
            return {
                ...state,
                projects: state.projects.projects.filter(data => data._id !== action.payload.data._id),
            };
        case UPDATE_PROJECT:
            return {
                ...state,
                projects: action.payload,
            };
            default:
            return {
                ...state,
            };
    }
};

export default projectReducer;