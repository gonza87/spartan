import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="titleHero">
              Somos una empresa que te brinda soluciones en{" "}
              <span>Seguridad</span>
            </h1>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <Link className="linkAsesoramiento" to={"/contact"}>
              <button className="btnAsesoramiento">
                Solicitar Asesoramiento
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
