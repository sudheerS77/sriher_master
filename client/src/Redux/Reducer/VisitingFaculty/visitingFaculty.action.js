import axios from "axios";

//Redux types
import { GET_VISITINGFACULTY, ADD_VISITINGFACULTY, DELETE_VISITINGFACULTY, GET_SPECIFIC_VISITINGFACULTY, UPDATE_VISITINGFACULTY } from "./visitingFaculty.type";

import { API_URL } from "../../../key";

export const getVisitingFaculty = () => async (dispatch) => {
    try {
        const facultyList = axios({
            method: "GET",
            url: `${API_URL}/faculty/visiting-faculty`
        }).then((response) => {
            return response;
        });        
        return dispatch({ type: GET_VISITINGFACULTY, payload: (await facultyList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificVisitingFaculty = (_id) => async (dispatch) => {
    try {
        const specificFacultyList = axios({
            method: "GET",
            url: `${API_URL}/faculty/getvisiting-faculty/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_VISITINGFACULTY, payload: (await specificFacultyList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addVisitingFaculty = (facultyData) => async (dispatch) => {
    try {
        const faculty = axios({
            method: "POST",
            url: `${API_URL}/faculty/add-visiting-faculty`,
            data: {facultyData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_VISITINGFACULTY, payload:  faculty});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updateVisitingFacultyData = (facultyData) => async (dispatch) => {
    try {
        const faculty = axios({
            method: "PUT",
            url: `${API_URL}/faculty/update-visiting-faculty`,
            data: {facultyData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_VISITINGFACULTY, payload:  faculty});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const deleteVisitingFaculty = (_id) => async (dispatch) => {
    try {
        const deleteFac = axios({
            method: "DELETE",
            url: `${API_URL}/faculty/delete-vf/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);
        return dispatch({ type: DELETE_VISITINGFACULTY, payload: (await deleteFac).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}