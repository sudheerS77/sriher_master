import { GET_SLIDER, GET_SPECIFIC_SLIDER, ADD_SLIDER, DELETE_SLIDER, UPDATE_SLIDER } from "./slider.type";

const INITIAL_STATE = {
    slider: []
};

const SliderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_SLIDER:
            return {
                ...state,
                slider: action.payload,
            };
        case GET_SPECIFIC_SLIDER:
            return {
                ...state,
                slider: action.payload,
            };
        case ADD_SLIDER:
            return {
                ...state,
                slider: action.payload,
            };
        case DELETE_SLIDER:
            return {
                ...state,
                slider: action.payload,
            };
         case UPDATE_SLIDER:
            return {
                ...state,
                slider: action.payload,
            };
            default:
            return {
                ...state,
            };
    }
};

export default SliderReducer;