import axios from 'axios';
import { LOGIN_SUCCESS } from './types';

export const registerUser = (user) =>{
  axios.post('/auth/register', {name: user.name, email:user.email, password: user.password})
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>console.log(err));
};

export const loginUser = (user)=> dispatch => {
  axios.post('auth/login', {email: user.email, password: user.password})
    .then(res=> dispatch ({
      type: LOGIN_SUCCESS, //log out what user sends back to the front end.
      payload: res.data
    }))
    .catch (err => console.log(err));  //log out the 404 error or others.
}