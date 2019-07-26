import axios from "axios";
import { GET_BY_USER, LOAD_USERS, ERROR } from "../types/postTypes";
import * as usrTypes from "../types/usrTypes"


const { GET_USERS: USERS_GET_ALL } = usrTypes;

export const getByUser = (key) => async (dispatch, getState) => {
  const { usuarios } = getState().UsuariosReducer;
  const { publications } = getState().PublicationsReducer;
  const userId = (usuarios[key]) ? usuarios[key].id : 0 ;

  try {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    dispatch({
      type: LOAD_USERS,
    });

    

    const updated_post = [
      ...publications,
      resp.data
    ]

    const posts_key = updated_post.length - 1;
    const updated_users = [...usuarios];
    updated_users[key] = {
      ...usuarios[key],
      posts_key
    };

    dispatch({
      type: USERS_GET_ALL,
      payload: updated_users
    });
    
    dispatch({
      type: GET_BY_USER,
      payload: updated_post
    });
  }catch(error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'No Avalibale Publications'
    });
  }
};
