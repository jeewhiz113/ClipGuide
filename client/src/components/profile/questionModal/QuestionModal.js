import React, { Component, useState } from 'react';
//import {v4 as uuid} from 'uuid';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
//Use useState hooks.
//this takes care of adding a question modal
//Then look at all the emails from Colin and make changes, then email Mandy.
const QuestionModal = ()=> {
  const [modal, setModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  
  const toggle = ()=>{ 
    setModal(!modal);
  }
  const onSubmit = e =>{
    e.preventDefault();  
  }
  return(
    <div>
      <Button className='remove-btn' color="danger" size="sm" onClick = {toggle}>Add Question</Button>
      <Modal isOpen = {modal} toggle = {toggle}>
          <ModalHeader toggle = {toggle}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit = {onSubmit}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type = 'email' name="email" id = "email" placeholder = "Email" className="mb-3"/>
                  <Label for='password'>Password</Label>
                  <Input type = 'password' name="password" id = "password" placeholder = "Password" className="mb-3" />
                  <Button color='dark' style={{marginTop: '2rem'}} block> Login</Button>
                </FormGroup>
              </Form>
            </ModalBody>
      </Modal>
    </div>
  );
}
export default QuestionModal;