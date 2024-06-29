import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav ">
      <Container>
        <Navbar.Brand className="menuNav">
          <Link className="menuNav" to={"/"}>
            <img className="logo" src="/img/logo.PNG" alt="logo" />
            <span className="titleLogo">Spartan</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="menuNav" to={"/"}>
              Inicio
            </Link>
            <Dropdown>
              <Dropdown.Toggle
                className="menuNav"
                variant="link"
                id="dropdown-basic"
              >
                Servicios
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item className="menuNav" href="#/action-1">
                  Servicio 1
                </Dropdown.Item>
                <Dropdown.Item className="menuNav" href="#/action-1">
                  Servicio 1
                </Dropdown.Item>
                <Dropdown.Item className="menuNav" href="#/action-1">
                  Servicio 1
                </Dropdown.Item>
                <Dropdown.Item className="menuNav" href="#/action-1">
                  Servicio 1
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link className="menuNav" to={"/about"}>
              Nosotros
            </Link>
            <Link className="menuNav" to={"/work"}>
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
