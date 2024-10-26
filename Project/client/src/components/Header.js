import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#0D92F4' }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-white font-weight-bold">
            Result Management System
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-white">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link className="text-white">Admin Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/student">
              <Nav.Link className="text-white">Student Portal</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
