import { combineReducers } from 'redux';
import PlayerReducer from './PlayerReducer';
import ErrorsReducer from './ErrorsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
	PlayerReducer,
	ErrorsReducer,
	AuthReducer
});