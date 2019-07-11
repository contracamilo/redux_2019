import { GET_BY_USER, LOAD_USERS, ERROR } from "../types/postTypes";

const INITIAL_STATE = {
  publications: [],
  loading:false,
  error:''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BY_USER:
      return {
        ...state,
        publications:action.payload,
        loading:false,
        error:''
      }
    case LOAD_USERS:
      return { 
        ...state, 
        loading:true,

      };
    case ERROR:
      return { 
        ...state, 
        loading:false,
        error:action.payload
      };
    default:
      return state;
  }
};
