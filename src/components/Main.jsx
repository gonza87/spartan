import React from "react";
import { Link } from "react-router-dom";
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
        <div className="conntIntroduccion animate__animated animate__fadeInLeftBig animate__slow">
          <p>
            <span className="titleSparta">Spartan</span> Seguridad se
            enorgullece de ofrecer servicios de protección y atención de la más
            alta calidad, respaldados por un equipo experto y dedicado. Nos
            comprometemos a garantizar su seguridad con responsabilidad,
            seriedad y una atención al cliente inigualable.
          </p>
        </div>
        <h2 className="titleServices">Nuestros Servicios</h2>
        <div className="contServices">
          <div
            ref={card1Ref}
            className={`text-center cardService ${
              card1InView ? "animate__animated animate__fadeInLeftBig" : ""
            }`}
          >
            <Link to={"/seguridadyvigilancia"}>
              <GiSwordwoman color="#D72323" size="6em" />
              <p>Seguridad y vigilancia</p>
            </Link>
          </div>

          <div
            ref={card2Ref}
            className={`text-center cardService ${
              card2InView
                ? "animate__animated animate__fadeInDownBig animate__slow"
                : ""
            }`}
          >
            <Link to={"/porteria"}>
              <GiDoorway color="#D72323" size="6em" />
              <p>Portería</p>
            </Link>
          </div>

          <div
            ref={card3Ref}
            className={`text-center cardService ${
              card3InView ? "animate__animated animate__fadeInUpBig" : ""
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
            <Link to={"/limpiezadeobra"}>
              <GiCenturionHelmet color="#D72323" size="6em" />
              <p>Limpieza de obra</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="main-content container">
        <h2 className="text-center titleTestimonos">Testimonios</h2>
        <TestimonialsCarousel />
        <div className="text-center">
          <h2 className="text-center titleCertificaciones">Certificaciones</h2>
          <img
            src=".././img/ministerio.jpg"
            alt="certificado"
            className="imgCertificado me-4"
          />
          <img
            src=".././img/certificado.jpg"
            alt="certificado"
            className="imgCertificado"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
