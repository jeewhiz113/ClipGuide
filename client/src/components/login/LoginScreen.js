import React from 'react';
import LoginModal from '../authModal/LoginModal';
import RegisterModal from '../authModal/RegisterModal';


//Idea, if isAuth is true, then show a profile screen, if false then show this screen:
//This screen simply has 2 buttons, a login and a register button.

const LoginScreen = () =>{
  //simply display the two buttons in the middle of the screen
  return (
    <div>
      <LoginModal />
      <RegisterModal />
  </div>
  )
} 



export default LoginScreen;