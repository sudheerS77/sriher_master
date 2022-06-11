import axios from "axios";
import { Dispatch } from "react";
//Redux types
import { GET_SLIDER, GET_SPECIFIC_SLIDER, ADD_SLIDER, DELETE_SLIDER, UPDATE_SLIDER} from "./slider.type";

export const getSlider = () => async (dispatch) => {
    try {
        const sliderList = axios({
            method: "GET",
            url: "http://localhost:4000/slider/"
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SLIDER, payload: (await sliderList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificSlider = (_id) => async (dispatch) => {
    try {
        const specificSlider = axios({
            method: "GET",
            url: `http://localhost:4000/slider/get/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_SLIDER, payload: (await specificSlider).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addSlider = (sliderData) => async (dispatch) => {
    console.log(sliderData);
    try {
        const slider = axios({
            method: "POST",
            url: "http://localhost:4000/slider/add-slider",
            data: {sliderData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_SLIDER, payload:  (await slider).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updateSlider = (sliderData) => async (dispatch) => {
    try {
        const slider = axios({
            method: "PUT",
            url: "http://localhost:4000/slider/update-slider",
            data: {sliderData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_SLIDER, payload:  (await slider).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const deleteSlider = (_id) => async (dispatch) => {
    try {
        const deleteSlider = axios({
            method: "DELETE",
            url: `http://localhost:4000/slider/delete/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);
        return dispatch({ type: DELETE_SLIDER, payload: (await deleteSlider).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}