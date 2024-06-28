import React from "react";

function HeroSection() {
  return (
    <div className="hero-section">
      <img
        src=".././img/spartan02.jpg"
        alt="Background"
        className="hero-background"
      />
      <div className="hero-gradient"></div>
      <div className="hero-text container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="titleHero">
              Somos una empresa que te brinda solucioines en{" "}
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
