import { combineReducers } from 'redux';
import PlayerReducer from './PlayerReducer';
import ErrorsReducer from './ErrorsReducer'

export default combineReducers({
	PlayerReducer,
	ErrorsReducer
});