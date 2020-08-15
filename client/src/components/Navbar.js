import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';

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