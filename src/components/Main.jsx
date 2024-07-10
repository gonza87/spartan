import React from "react";
import { useInView } from "react-intersection-observer";
import {
  GiCenturionHelmet,
  GiSwordWound,
  GiSwordwoman,
  GiDoorway,
} from "react-icons/gi";
import "animate.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

function Main() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: card4Ref, inView: card4InView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="main">
      <div className="main-content container">
        <div className="conntIntroduccion">
          <p>
            Spartan Seguridad se enorgullece de ofrecer servicios de protección
            y atención de la más alta calidad, respaldados por un equipo experto
            y dedicado. Nos comprometemos a garantizar su seguridad con
            responsabilidad, seriedad y una atención al cliente inigualable.
          </p>
        </div>
        <h2 className="titleServices">Nuestros Servicios</h2>
        <div className="contServices">
          <div
            ref={card1Ref}
            className={`text-center cardService ${
              card1InView
                ? "animate__animated animate__fadeInLeftBig animate__slow"
                : ""
            }`}
          >
            <GiSwordwoman color="#D72323" size="6em" />
            <p>Seguridad y vigilancia</p>
          </div>
          <div
            ref={card2Ref}
            className={`text-center cardService ${
              card2InView
                ? "animate__animated animate__fadeInDownBig animate__slow"
                : ""
            }`}
          >
            <GiDoorway color="#D72323" size="6em" />
            <p>Portería</p>
          </div>
          <div
            ref={card3Ref}
            className={`text-center cardService ${
              card3InView
                ? "animate__animated animate__fadeInUpBig animate__slow"
                : ""
            }`}
          >
            <GiSwordWound color="#D72323" size="6em" />
            <p>Limpieza y mantenimiento</p>
          </div>
          <div
            ref={card4Ref}
            className={`text-center cardService ${
              card4InView
                ? "animate__animated animate__fadeInRightBig animate__slow"
                : ""
            }`}
          >
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
