import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand className="menuNav" href="#home">
          <img className="logo" src="/img/logo.PNG" alt="logo" />
          <span className="titleLogo">Spartan</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="menuNav" href="#home">
              Inicio
            </Nav.Link>

            <Nav.Link className="menuNav" href="#link">
              Nosotros
            </Nav.Link>
            <Nav.Link className="menuNav" href="#link">
              Trabaja con nosotros
            </Nav.Link>
            <Nav.Link className="menuNav" href="#link">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
