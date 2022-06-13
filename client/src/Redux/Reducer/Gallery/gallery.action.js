import axios from "axios";

//Redux types
import { GET_PHOTOS, GET_SPECIFIC_PHOTOS, ADD_PHOTOS, DELETE_PHOTOS, UPDATE_PHOTOS} from "./gallery.type";

import { API_URL } from "../../../key";

export const getPhotos = () => async (dispatch) => {
    try {
        const photosList = axios({
            method: "GET",
            url: `${API_URL}/photos/`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_PHOTOS, payload: (await photosList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificPhotos = (_id) => async (dispatch) => {
    try {
        const specificPhoto = axios({
            method: "GET",
            url: `${API_URL}/photos/get/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_PHOTOS, payload: (await specificPhoto).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addPhoto = (galleryData) => async (dispatch) => {
    try {
        const photo = axios({
            method: "POST",
            url: `${API_URL}/photos/add-gallery`,
            data: {galleryData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_PHOTOS, payload:  (await photo).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updatePhotoData = (galleryData) => async (dispatch) => {
    try {
        const photo = axios({
            method: "PUT",
            url: `${API_URL}/photos/update-gallery`,
            data: {galleryData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_PHOTOS, payload:  (await photo).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const deletePhoto = (_id) => async (dispatch) => {
    try {
        const deletePhoto = axios({
            method: "DELETE",
            url: `${API_URL}/photos/delete/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);
        return dispatch({ type: DELETE_PHOTOS, payload: (await deletePhoto).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}