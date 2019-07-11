import { combineReducers } from 'redux';
import UsuariosReducer from './UsuariosReducer';
import PublicationsReducer from './PublicationsReducer';

export default combineReducers({
	UsuariosReducer,
	PublicationsReducer
});