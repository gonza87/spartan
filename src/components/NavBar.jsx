import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav ">
      <Container>
        <Navbar.Brand className="menuNav" href="#home">
          <img className="logo" src="/img/logo.PNG" alt="logo" />
          <span className="titleLogo">Spartan</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="menuNav" to={"/"}>
              Inicio
            </Link>

            <Link className="menuNav" to={"/contact"}>
              Nosotros
            </Link>
            <Link className="menuNav" to={"/contact"}>
              Trabaja con nosotros
            </Link>
            <Link className="menuNav" to={"/contact"}>
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
