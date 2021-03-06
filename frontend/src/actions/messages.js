import {GET_ERRORS,CREATE_MESSAGE} from './types'

// Return errors
export const returnErrors = (msg,status)=>{
	return{
		type:GET_ERRORS,
		payload:{msg,status}
	}
}

export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};