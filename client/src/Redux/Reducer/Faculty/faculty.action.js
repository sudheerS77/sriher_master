import axios from "axios";

//Redux types
import { GET_FACULTY, ADD_FACULTY, DELETE_FACULTY, GET_SPECIFIC_FACULTY, UPDATE_FACULTY } from "./faculty.type";

import { API_URL } from "../../../key";

export const getFaculty = () => async (dispatch) => {
    try {
        const facultyList = await axios({
            method: "GET",
            url: `${API_URL}/faculty`,
        }).then((response) => {
            return response;
        });        
        return dispatch({ type: GET_FACULTY, payload:  facultyList.data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificFaculty = (_id) => async (dispatch) => {
    try {
        console.log("_ID"+_id);
        const specificFacultyList = await axios({
            method: "GET",
            url: `${API_URL}/faculty/get-faculty/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_FACULTY, payload:  specificFacultyList.data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addFaculty = (facultyData) => async (dispatch) => {
    try {
        const faculty = await axios({
            method: "POST",
            url: `${API_URL}/faculty/add-faculty`,
            data: {facultyData},
        }).then((response) => {
            return response;
        });

        return dispatch({ type: ADD_FACULTY, payload:  facultyData});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }       
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const updateFacultyData = (facultyData) => async (dispatch) => {
    try {
        const faculty = await axios({
            method: "PUT",
            url: `${API_URL}/faculty/update-faculty`,
            data: {facultyData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_FACULTY, payload:  facultyData});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const deleteFaculty = (_id) => async (dispatch) => {
    try {
        const deleteFac = await axios({
            method: "DELETE",
            url: `${API_URL}/faculty/delete-f/${_id}`,
        }).then((response) => {
            return response;
        });
        if(!deleteFac.status === 200) {
            alert("Error")
        }        
        window.location.reload(false);
        return dispatch({ type: DELETE_FACULTY, payload:  deleteFac.data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}