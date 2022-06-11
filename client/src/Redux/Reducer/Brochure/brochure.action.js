import axios from "axios";

//Redux types
import { GET_BROCHURE, GET_SPECIFIC_BROCHURE, ADD_BROCHURE, DELETE_BROCHURE, UPDATE_BROCHURE } from "./brochure.type";

export const getBrochure = () => async (dispatch) => {
    try {
        const brochureList = await axios({
            method: "GET",
            url: "http://localhost:4000/brochure/"
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_BROCHURE, payload: brochureList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificBrochure = (_id) => async (dispatch) => {
    try {
        const specificBrochure = await axios({
            method: "GET",
            url: `http://localhost:4000/brochure/get/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_BROCHURE, payload: specificBrochure.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addBrochure = (brochureData) => async (dispatch) => {
    try {
        const brochure = await axios({
            method: "POST",
            url: "http://localhost:4000/brochure/add-brochure",
            data: {brochureData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_BROCHURE, payload: brochure.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updateBrochure = (brochureData) => async (dispatch) => {
    try {
        const brochure = await axios({
            method: "PUT",
            url: "http://localhost:4000/brochure/update-brochure",
            data: {brochureData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_BROCHURE, payload:  brochure.data});
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const deleteBrochure = (_id) => async (dispatch) => {
    try {
        const deleteBrochure = axios({
            method: "DELETE",
            url: `http://localhost:4000/brochure/delete/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);
        return dispatch({ type: DELETE_BROCHURE, payload: deleteBrochure.data});
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}