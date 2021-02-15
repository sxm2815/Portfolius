import React from 'react';
import footer_image from '../assets/img/logo/moontree.png'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

function NavComponent() {
  return (
    <>
    <div className="mr-auto header-logo">
      <a href="_">
        <Image src={footer_image} alt="logo" fluid className="nav-logo"/>
      </a>
    </div>
    <Navbar expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
    </>
  )
}

export default NavComponent;
