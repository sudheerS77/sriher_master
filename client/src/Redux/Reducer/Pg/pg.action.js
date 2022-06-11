import axios from "axios";

//Redux types
import { GET_PG, ADD_PG, DELETE_PG, GET_SPECIFIC_PG, UPDATE_PG } from "./pg.type";

export const getPg = () => async (dispatch) => {
    try {
        const pgList = axios({
            method: "GET",
            url: "http://localhost:4000/pg/"
        }).then((response) => {
            return response;
        });        
        return dispatch({ type: GET_PG, payload: (await pgList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificPG = (_id) => async (dispatch) => {
    try {
        const specificPgList = axios({
            method: "GET",
            url: `http://localhost:4000/pg/get-pg/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_PG, payload: (await specificPgList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addPg = (pgData) => async (dispatch) => {
    try {
        const pg = axios({
            method: "POST",
            url: "http://localhost:4000/pg/add-pg",
            data: {pgData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_PG, payload:  pg});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updatePgData = (pgData) => async (dispatch) => {
    try {
        const pg = axios({
            method: "PUT",
            url: "http://localhost:4000/pg/update-pg",
            data: {pgData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_PG, payload:  pg});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const deletePg = (_id) => async (dispatch) => {
    try {
        const deletePg = axios({
            method: "DELETE",
            url: `http://localhost:4000/pg/delete-pg/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);  
        return dispatch({ type: DELETE_PG, payload: (await deletePg).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}