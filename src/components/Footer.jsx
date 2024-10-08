import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contEmailTel mt-2">
          <p>Email: contacto@spartanseguridad.com.uy</p>
          <p className="ps-1 pe-1">|</p>
          <p>Tel: 2683 8533</p>
        </div>

        <hr />
        <p className="text-center">
          © Copyright {new Date().getFullYear()} Spartan | Desarrollado por{" "}
          <a
            target="_blank"
            className="linkPortfolio"
            href="https://gonzaloviglionidev.com/"
          >
            Gonzalo
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
