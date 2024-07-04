import React from "react";

function About() {
  return (
    <>
      <div className="hero-about">
        <div className="about-content container">
          <h2 className="titleAbout mt-5">Sobre nosotros</h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row about-content">
          <div className="col-12 d-flex justify-content-center">
            <div className="contQuienes">
              <h2 className="titleQuienes">¿Quiénes Somos?</h2>
              <p>
                <span className="titleSparta">Spartan</span> Seguridad es una
                empresa líder en el sector de la seguridad, comprometida con la
                protección y el bienestar de nuestros clientes. Nos distinguimos
                por nuestra excelencia operativa y la calidad de nuestro
                personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
