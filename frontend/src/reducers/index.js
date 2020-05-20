import { combineReducers } from 'redux';
import PlayerReducer from './PlayerReducer';
import ErrorsReducer from './ErrorsReducer';
import AuthReducer from './AuthReducer';
import MessageReducer from './MessageReducer'

export default combineReducers({
	PlayerReducer,
	ErrorsReducer,
	AuthReducer,
	MessageReducer
});