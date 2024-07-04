import React from "react";

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
            <button className="btnAsesoramiento">
              Solicitar Asesoramiento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
