import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavbarComponent() {
  let loggedIn = true;

  if(loggedIn === true){
    return (
      <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>Annapurna Tiffin Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Nav.Link>
            <Nav.Link><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></Nav.Link>
            <Nav.Link><Link to="/orders" style={{ textDecoration: 'none' }}>Orders</Link></Nav.Link>
            <Nav.Link><Link to="/plan" style={{ textDecoration: 'none' }}>Plan</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  } else{
    return (
      <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>Annapurna Tiffin Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Nav.Link>
            {/* <Nav.Link><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
  }
    
  }
  
  export default NavbarComponent;