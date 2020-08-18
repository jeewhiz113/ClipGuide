import React from 'react';
import Navbar from './components/Navbar'
import LoginScreen from './components/login/LoginScreen'
import UserProfile from './components/profile/UserProfile'
import './App.css';
import {connect} from 'react-redux';

const App = (props) => {
  
    console.log(props);
    return (
      <div className="App">

        <h1>Hello World</h1>
        {props.isAuthenticated ? (
                <UserProfile />
              ) : <LoginScreen/> }
        <Navbar />

      </div>
    );
  
  
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    questions: state.question.questions  
  }
};


export default connect(mapStateToProps)(App); 

