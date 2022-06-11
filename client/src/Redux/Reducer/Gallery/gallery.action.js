import axios from "axios";
import { Dispatch } from "react";
//Redux types
import { GET_PHOTOS, GET_SPECIFIC_PHOTOS, ADD_PHOTOS, DELETE_PHOTOS, UPDATE_PHOTOS} from "./gallery.type";

export const getPhotos = () => async (dispatch) => {
    try {
        const photosList = axios({
            method: "GET",
            url: "http://localhost:4000/photos/"
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
            url: `http://localhost:4000/photos/get/${_id}`
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
            url: "http://localhost:4000/photos/add-gallery",
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
            url: "http://localhost:4000/photos/update-gallery",
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
            url: `http://localhost:4000/photos/delete/${_id}`,
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