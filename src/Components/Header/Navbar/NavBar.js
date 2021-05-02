import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand style={{fontSize: '40px'}} className="text-warning font-weight-bolder" href="home">Shahriar Shubho</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto p-2 font-weight-bold text-light">
            <Nav.Link as={Link} className="text-light" to="home">Home</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="home#services">Services</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="projects">Project</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="home#skill">Skill</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="home#about">About</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="contract">Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;