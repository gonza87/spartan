import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const handleNavClose = () => setExpanded(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    handleNavClose(); // Close the navbar when a link is clicked
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="nav"
    >
      <Container>
        <Navbar.Brand className="menuNav">
          <Link
            className="menuNav"
            to={"/"}
            onClick={() => handleLinkClick("/")}
          >
            <img
              className="logo animate__animated animate__flip animate__repeat-2"
              src="/img/logo.PNG"
              alt="logo"
            />
            <span className="titleLogo">Spartan</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={
                activeLink === "/" ? "menuNavActived menuNav" : "menuNav"
              }
              to={"/"}
              onClick={() => handleLinkClick("/")}
            >
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
                <Dropdown.Item
                  className={
                    activeLink === "/service-1"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  href="/service-1"
                  onClick={() => handleLinkClick("/service-1")}
                >
                  Servicio 1
                </Dropdown.Item>
                <Dropdown.Item
                  className={
                    activeLink === "/service-2"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  href="/service-2"
                  onClick={() => handleLinkClick("/service-2")}
                >
                  Servicio 2
                </Dropdown.Item>
                <Dropdown.Item
                  className={
                    activeLink === "/service-3"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  href="/service-3"
                  onClick={() => handleLinkClick("/service-3")}
                >
                  Servicio 3
                </Dropdown.Item>
                <Dropdown.Item
                  className={
                    activeLink === "/service-4"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  href="/service-4"
                  onClick={() => handleLinkClick("/service-4")}
                >
                  Servicio 4
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link
              className={
                activeLink === "/about" ? "menuNavActived menuNav" : "menuNav"
              }
              to={"/about"}
              onClick={() => handleLinkClick("/about")}
            >
              Nosotros
            </Link>
            <Link
              className={
                activeLink === "/work" ? "menuNavActived menuNav" : "menuNav"
              }
              to={"/work"}
              onClick={() => handleLinkClick("/work")}
            >
              Trabaja con nosotros
            </Link>
            <Link
              className={
                activeLink === "/contact" ? "menuNavActived menuNav" : "menuNav"
              }
              to={"/contact"}
              onClick={() => handleLinkClick("/contact")}
            >
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
