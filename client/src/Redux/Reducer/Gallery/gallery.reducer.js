import { GET_PHOTOS, GET_SPECIFIC_PHOTOS, ADD_PHOTOS, DELETE_PHOTOS, UPDATE_PHOTOS } from "./gallery.type";

const INITIAL_STATE = {
    photos: []
};

const galleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
        case GET_SPECIFIC_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
        case ADD_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
        case DELETE_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
         case UPDATE_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
            default:
            return {
                ...state,
            };
    }
};

export default galleryReducer;