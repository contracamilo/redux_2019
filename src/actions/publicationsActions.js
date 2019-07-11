import axios from "axios";
import { GET_BY_USER, LOAD_USERS, ERROR } from "../types/postTypes";

/*
export const getAllPost = () => async dispatch => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type:LOAD_USERS
  })
  try {
    dispatch({
      type: GET_BY_USER,
      payload: resp.data
    });
  } catch (error) {
    dispatch({
      type:ERROR,
      payload:error.message
    })
  }
};*/

export const getByUser = (key) => async (dispatch, getState) => {
  const { usuarios } = getState().UsuariosReducer;
  const { publications } = getState().PublicationsReducer;
  const userId = (usuarios[key]) ? usuarios[key].id : '0' ;

  const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);



  const updated_post = [
    ...publications,
    resp.data
  ]
  
  
  dispatch({
    type: GET_BY_USER,
    payload: updated_post
  });
};
