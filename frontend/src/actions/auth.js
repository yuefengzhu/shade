import axios from 'axios';
import { returnErrors } from './messages';
import{
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from './types';

//check token and load user

export const loadUser = () => (dispatch,getState)=>{
	//User Loading
	dispatch({type: USER_LOADING});

	axios.get('/api/getUser/',  tokenConfig(getState))
		.then((res)=>{
			dispatch({
				type: USER_LOADED,
				payload:res.data
			});
		}).catch(err => {
			console.log("load User error");
			dispatch(returnErrors(err.response.data), err.response.status);
			dispatch({
				type: AUTH_ERROR
			});
		})
}
// LOGIN USER
export const login = (username, password) => (dispatch)=>{

	//Headers
	const config = {
		headers:{
			'Content-Type': 'application/json'
		}
	}
	const body = JSON.stringify({
		username,password
	});

	axios.post('/api/login/', body, config)
		.then((res)=>{
			dispatch({
				type: LOGIN_SUCCESS,
				payload:res.data
			});
		}).catch(err => {
			dispatch(returnErrors(err.response.data), err.response.status);
			dispatch({
				type: LOGIN_FAIL
			});
		})
}


// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().AuthReducer.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};