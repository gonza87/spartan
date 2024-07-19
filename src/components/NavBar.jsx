import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { CgMenuLeft } from "react-icons/cg";
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
              src="/img/logo.png"
              alt="logo"
            />
            <span className="titleLogo">Spartan</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <CgMenuLeft style={{ color: "#D72323" }} />
        </Navbar.Toggle>
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
                    activeLink === "/seguridadyvigilancia"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  as={Link}
                  to="/seguridadyvigilancia"
                  onClick={() => handleLinkClick("/seguridadyvigilancia")}
                >
                  Seguridad y vigilancia
                </Dropdown.Item>
                <Dropdown.Item
                  className={
                    activeLink === "/serviceporteria"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  as={Link}
                  to="/porteria"
                  onClick={() => handleLinkClick("/serviceporteria")}
                >
                  Portería
                </Dropdown.Item>
                <Dropdown.Item
                  className={
                    activeLink === "/limpiezamantenimiento"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  as={Link}
                  to="/limpiezamantenimiento"
                  onClick={() => handleLinkClick("/limpiezamantenimiento")}
                >
                  Limpieza y mantenimiento
                </Dropdown.Item>
                <Dropdown.Item
                  className={
                    activeLink === "/limpiezadeobra"
                      ? "menuNavActived menuNav"
                      : "menuNav"
                  }
                  as={Link}
                  to="/limpiezadeobra"
                  onClick={() => handleLinkClick("/limpiezadeobra")}
                >
                  Limpieza de obra
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
