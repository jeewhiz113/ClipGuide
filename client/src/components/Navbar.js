import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import LoginModal from './authModal/LoginModal';
import RegisterModal from './authModal/RegisterModal';


//Idea, if isAuth is true, then show a profile screen, if false then show this screen:
//This screen simply has 2 buttons, a login and a register button.
const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        
        <NavbarToggler onClick={toggle} />
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <LoginModal />
            </NavItem>
            <NavItem>
              <RegisterModal />
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        
      </Navbar>
    </div>
  );
}

export default AppNavbar;