import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";


const NavBar = () => {
    useEffect(() => {
      AOS.init({duration : 2000});
    },[])
    return (
        <Navbar data-aos="fade-down" bg="dark" expand="lg">
        <Navbar.Brand style={{fontSize: '40px'}} className="text-warning font-weight-bolder" href="home">Shahriar Shubho</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto p-2 font-weight-bold text-light">
            <Nav.Link  className="text-light" href="home">Home</Nav.Link>
            <Nav.Link  className="text-light" href="#services">Services</Nav.Link>
            <Nav.Link  className="text-light" href="#blogs">Blogs</Nav.Link>
            <Nav.Link  className="text-light" href="#projects">Project</Nav.Link>
            <Nav.Link  className="text-light" href="#skill">Skill</Nav.Link>
            <Nav.Link  className="text-light" href="#about">About</Nav.Link>
            <Nav.Link  className="text-light" href="#contract">Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;