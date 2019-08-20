import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

import RegisterModal from "../User/RegisterModal";
import LoginModal from "../User/LoginModal";

const HeaderNav = ({ logout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const guestLinks = !user ? (
    <>
      <NavItem>
        <NavLink href="#">
          <RegisterModal />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          <LoginModal />
        </NavLink>
      </NavItem>
    </>
  ) : null;
  const authenticatedUserLinks = user ? (
    <>
      <NavItem>
        <NavLink href="#">Welcome {user.name}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" onClick={logout}>
          logout
        </NavLink>
      </NavItem>
    </>
  ) : null;

  return (
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        <NavbarBrand href="/">Products store</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {guestLinks}
            {authenticatedUserLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
