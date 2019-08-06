import axios from "axios";
import { GET_USERS, LOAD_USERS, ERROR } from "../types/usrTypes";

export const getAll = () => async dispatch => {
    dispatch({
        type: LOAD_USERS
    });
    try {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users");

        dispatch({
            type: GET_USERS,
            payload: resp.data
        });
    } catch (error) {
        console.log("Error:", error.message);
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
};