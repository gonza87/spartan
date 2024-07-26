import React from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

function About() {
  const form = useRef();
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
  const { ref: card5Ref, inView: card5InView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="hero-about">
        <div className="about-content container">
          <h2 className="titleAbout">Sobre nosotros</h2>
          <div className="row about-content">
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div
                    ref={card1Ref}
                    className={`contQuienes ${
                      card1InView
                        ? "animate__animated animate__fadeInRight animate__slow"
                        : ""
                    }`}
                  >
                    <h2 className="titleQuienes">¿Quiénes Somos?</h2>
                    <p>
                      <span className="titleSparta">Spartan</span> Seguridad es
                      una empresa líder en el sector de la seguridad,
                      comprometida con la protección y el bienestar de nuestros
                      clientes. Nos distinguimos por nuestra excelencia
                      operativa y la calidad de nuestro personal.
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    ref={card2Ref}
                    className={`contQuienes ${
                      card2InView
                        ? "animate__animated animate__fadeInDown animate__slow"
                        : ""
                    }`}
                  >
                    <h2 className="titleQuienes">
                      Nuestro Equipo de Capacitación
                    </h2>
                    <p>
                      En <span className="titleSparta">Spartan</span> Seguridad,
                      contamos con un equipo de instructores altamente
                      calificados provenientes de jerarquías militares y
                      policiales. Este equipo de elite asegura que nuestra
                      formación sea de la más alta calidad y rigor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                ref={card3Ref}
                className={`contQuienes ${
                  card3InView
                    ? "animate__animated animate__fadeInDown animate__slow"
                    : ""
                }`}
              >
                <h2 className="titleQuienes">Áreas de Capacitación</h2>
                <p>
                  1. Capacitación ante el Delito y Procedimientos de Actuación
                </p>
                <ul>
                  <li>
                    Prevención del delito: Técnicas y tácticas para anticipar y
                    prevenir actos delictivos.
                  </li>
                  <li>
                    Respuesta inmediata: Protocolos y procedimientos para actuar
                    de manera eficiente y segura ante situaciones de riesgo.
                  </li>
                  <li>
                    Uso de tecnología: Implementación de herramientas avanzadas
                    para la vigilancia y seguridad.
                  </li>
                </ul>

                <p>
                  2. Atención y Recepción en Edificios y Grandes Residencias
                </p>
                <ul>
                  <li>
                    Control de acceso: Técnicas para gestionar y supervisar el
                    ingreso de personas.
                  </li>
                  <li>
                    Servicio al cliente: Formación en habilidades de
                    comunicación y trato con el público.
                  </li>
                  <li>
                    Procedimientos de emergencia: Planificación y ejecución de
                    protocolos de evacuación y respuesta ante emergencias.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                ref={card4Ref}
                className={`contQuienes ${
                  card4InView
                    ? "animate__animated animate__fadeInRight animate__slow"
                    : ""
                }`}
              >
                <h2 className="titleQuienes">Nuestros Valores Fundamentales</h2>
                <ul>
                  <li>
                    Responsabilidad: Nos comprometemos con la seguridad y el
                    bienestar de nuestros clientes.
                  </li>
                  <li>
                    Seriedad: Tratamos cada situación con la seriedad que
                    merece, asegurando siempre la máxima protección.
                  </li>
                  <li>
                    Atención al Cliente: La satisfacción de nuestros clientes es
                    nuestra prioridad. Ofrecemos un servicio atento y
                    profesional en todo momento.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                ref={card5Ref}
                className={`contQuienes ${
                  card5InView
                    ? "animate__animated animate__fadeInLeft animate__slow"
                    : ""
                }`}
              >
                <h2 className="titleQuienes">Opciones de Contratación</h2>
                <p>
                  En <span className="titleSparta">Spartan</span> Seguridad,
                  entendemos que cada cliente tiene necesidades únicas. Por
                  ello, ofrecemos precios flexibles y varias opciones de
                  contratación para adaptarnos a sus requerimientos:
                </p>
                <ul>
                  <li>Planes Básicos: Servicios esenciales de seguridad.</li>
                  <li>
                    Planes Intermedios: Servicios de seguridad y atención al
                    cliente ampliados.
                  </li>
                  <li>
                    Planes Premium: Servicios completos, con acceso a todas
                    nuestras capacidades y tecnologías avanzadas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
