import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#action/3.2">About</Nav.Link>
          <Nav.Link href="#action/3.3">Services</Nav.Link>
          <Nav.Link href="#action/3.3">Portfolio</Nav.Link>
          <Nav.Link href="#action/3.3">Pages</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavComponent;
