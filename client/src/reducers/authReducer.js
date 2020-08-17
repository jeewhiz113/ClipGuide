import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from '../action/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export default function(state = initialState, action){
  console.log(action.type);
  switch(action.type){
    case USER_LOADED:  //if the case is USER_LOADED, then change the state
      return {
        ...state,
        isAuthenticated: true,
        isLoading:false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        ...action.payload,
        isAuthenticated:true,
        isLoading: false
      };
    default: 
      return {
        ...state
      }
  }
}