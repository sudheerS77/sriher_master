import axios from "axios";

//Redux types
import { SELF, CLEAR_USER, UPDATE_USER, DELETE_USER, GET_USERS, ADD_USER, GET_SPECIFIC_USER, ALL_USERS } from "./user.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`
        }).then((response) => {
            return response;
        });        
        return dispatch({ type: GET_USERS, payload: (await User).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getAllUsers = () => async (dispatch) => {
    try {
        const userList = axios({
            method: "GET",
            url: "http://localhost:4000/user/allusers"
        }).then((response) => {
            return response;
        });        
        console.log(userList);
        return dispatch({ type: ALL_USERS, payload: (await userList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
// export const getSpecificUser = (_id) => async (dispatch) => {
//     try {
//         const specificProjectList = axios({
//             method: "GET",
//             url: `http://localhost:4000/user/get/${_id}`
//         }).then((response) => {
//             return response;
//         });
//         return dispatch({ type: GET_SPECIFIC_USER, payload: (await specificProjectList).data });
//     } catch (error) {   
//         return dispatch({ type: "ERROR", payload: error });
//     }
// }

export const addUser = (userData) => async (dispatch) => {
    try {
        const user = axios({
            method: "POST",
            url: "http://localhost:4000/",
            data: {userData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_USER, payload:  (await user).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updateUserData = (userData) => async (dispatch) => {
    try {
        const user = axios({
            method: "PUT",
            url: "http://localhost:4000/user/update",
            data: {userData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_USER, payload:  (await user).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const deleteUser = (_id) => async (dispatch) => {
    try {
        const deleteUser = axios({
            method: "DELETE",
            url: `http://localhost:4000/user/delete/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);
        return dispatch({ type: DELETE_USER });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}


export const getMySelf = () => async (dispatch) => {
    try {
        const User = axios({
            method: "GET",
            url: `http://localhost:4000/user/`
        }).then((response) => {
            return response;
        });        
        console.log(User);
        return dispatch({ type: SELF, payload: (await User).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const clearUser = () => async (dispatch) => {
    try {
      return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
      return dispatch({ type: "ERROR", payload: error });
    }
  };