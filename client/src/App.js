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
  console.log(state);
  return {
    isAuthenticated: state.isAuthenticated,
    questions: state.questions,  //Why is this undefined? Perhaps I need to dispatch it also?
  }
};


export default connect(mapStateToProps)(App); 

//Tomorrow: create a router that takes the user to the profile page.  In the profile page, the user can add a new question, then a modal pops up and ask the user for the topic
