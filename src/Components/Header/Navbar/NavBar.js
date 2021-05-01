import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto p-2 font-weight-bold text-light">
            <Nav.Link className="text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="text-light" href="#link">Service</Nav.Link>
            <Nav.Link className="text-light" href="#link">Blogs</Nav.Link>
            <Nav.Link className="text-light" href="#link">Project</Nav.Link>
            <Nav.Link className="text-light" href="#link">Skill</Nav.Link>
            <Nav.Link className="text-light" href="#link">About</Nav.Link>
            <Nav.Link className="text-light" href="#link">Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;