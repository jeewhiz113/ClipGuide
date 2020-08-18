import React from 'react';
import { connect } from 'react-redux';
//also import the addQuestion from the action folder.



const UserProfile = (props) =>{
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
} 

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    name: state.auth.user.name  //Why is this undefined? Perhaps I need to dispatch it also?
  }
};



export default connect(mapStateToProps)(UserProfile);