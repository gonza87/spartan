import React from "react";

import { GiCenturionHelmet } from "react-icons/gi";
import { GiSwordWound } from "react-icons/gi";
import { GiSwordwoman } from "react-icons/gi";
import { GiDoorway } from "react-icons/gi";
import TestimonialsCarousel from "./TestimonialsCarousel";
function Main() {
  return (
    <div className="main">
      {/* <img src=".././img/spartan04.jpg" alt="" className="main-background" /> */}
      {/* <div className="combined-gradient"></div> */}
      <div className="main-content container">
        <h2 className="titleServices">Nuestros Servicios</h2>
        <div className="contServices">
          <div className="text-center cardService">
            <GiSwordwoman color="#D72323" size="6em" />
            <p>Seguridad y vigilancia</p>
          </div>
          <div className="text-center cardService">
            <GiDoorway color="#D72323" size="6em" />
            <p>Portería</p>
          </div>
          <div className="text-center cardService">
            <GiSwordWound color="#D72323" size="6em" />
            <p>Limpieza y mantenimiento</p>
          </div>
          <div className="text-center cardService">
            <GiCenturionHelmet color="#D72323" size="6em" />
            <p>Limpieza de obra</p>
          </div>
        </div>
      </div>
      <div className="main-content container">
        <h2 className="text-center titleTestimonos">Testimonios</h2>
        <TestimonialsCarousel />
      </div>
    </div>
  );
}

export default Main;
