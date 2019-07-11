import { GET_USERS, LOAD_USERS, ERROR } from '../types/usrTypes'

const INITIAL_STATE = {
  usuarios: [],
  loading:false,
  error:''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { 
        ...state, 
        usuarios: action.payload,
        loading:false, 
        error:''

      };
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
