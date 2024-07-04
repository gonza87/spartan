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
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <div className="contQuienes">
                  <h2 className="titleQuienes">¿Quiénes Somos?</h2>
                  <p>
                    <span className="titleSparta">Spartan</span> Seguridad es
                    una empresa líder en el sector de la seguridad, comprometida
                    con la protección y el bienestar de nuestros clientes. Nos
                    distinguimos por nuestra excelencia operativa y la calidad
                    de nuestro personal.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="contQuienes">
                  <h2 className="titleQuienes">
                    Nuestro Equipo de Capacitación
                  </h2>
                  <p>
                    En <span className="titleSparta">Spartan</span> Seguridad,
                    contamos con un equipo de instructores altamente calificados
                    provenientes de jerarquías militares y policiales. Este
                    equipo de elite asegura que nuestra formación sea de la más
                    alta calidad y rigor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contQuienes">
              <h2 className="titleQuienes">Áreas de Capacitación</h2>
              <p>
                1. Capacitación ante el Delito y Procedimientos de Actuación
              </p>

              <p className="ms-2">
                * Prevención del delito: Técnicas y tácticas para anticipar y
                prevenir actos delictivos.
              </p>
              <p className="ms-2">
                * Respuesta inmediata: Protocolos y procedimientos para actuar
                de manera eficiente y segura ante situaciones de riesgo.
              </p>
              <p className="ms-2">
                * Uso de tecnología: Implementación de herramientas avanzadas
                para la vigilancia y seguridad.
              </p>
              <p>2. Atención y Recepción en Edificios y Grandes Residencias</p>
              <p className="ms-2">
                * Control de acceso: Técnicas para gestionar y supervisar el
                ingreso de personas.
              </p>
              <p className="ms-2">
                * Servicio al cliente: Formación en habilidades de comunicación
                y trato con el público.
              </p>
              <p className="ms-2">
                * Procedimientos de emergencia: Planificación y ejecución de
                protocolos de evacuación y respuesta ante emergencias.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contQuienes">
              <h2 className="titleQuienes">Nuestros Valores Fundamentales</h2>
              <p>
                * Responsabilidad: Nos comprometemos con la seguridad y el
                bienestar de nuestros clientes.
              </p>
              <p>
                * Seriedad: Tratamos cada situación con la seriedad que merece,
                asegurando siempre la máxima protección.
              </p>
              <p>
                * Atención al Cliente: La satisfacción de nuestros clientes es
                nuestra prioridad. Ofrecemos un servicio atento y profesional en
                todo momento.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contQuienes">
              <h2 className="titleQuienes">Opciones de Contratación</h2>
              <p>
                En Spartan Seguridad, entendemos que cada cliente tiene
                necesidades únicas. Por ello, ofrecemos precios flexibles y
                varias opciones de contratación para adaptarnos a sus
                requerimientos:
              </p>
              <p>* Planes Básicos: Servicios esenciales de seguridad.</p>
              <p>
                * Planes Intermedios: Servicios de seguridad y atención al
                cliente ampliados.
              </p>
              <p>
                * Planes Premium: Servicios completos, con acceso a todas
                nuestras capacidades y tecnologías avanzadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
