import React from 'react';
import { connect } from 'react-redux';

import QuestionModal from './questionModal/QuestionModal';
//also import the addQuestion from the action folder.

//So we have UserProfile here and then we load up questions.js as a component in here.

const UserProfile = (props) =>{
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <QuestionModal />
    </div>
  )
} 

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.auth.user.name  //Why is this undefined? Perhaps I need to dispatch it also?
    
  }
};

//Now I add the addquestion button and addquestion action.  It should add the question to the database, then return the question and I should grab that and then add it to the questions array in the redux store.  Then create a component strictly to display all the questions in the userprofile.


export default connect(mapStateToProps)(UserProfile);