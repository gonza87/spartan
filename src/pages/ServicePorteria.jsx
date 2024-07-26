import React from "react";
import { useInView } from "react-intersection-observer";

function ServicePorteria() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="hero-porteria">
        <div className="porteria-content container">
          <h2 className="titlePorteria">Portería</h2>

          <div className="row porteria-content">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="animate__animated animate__zoomIn">
                <img
                  src="../.././img/porteria5.jpg"
                  alt="porteria"
                  className="img-fluid imgPorteria"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div
                ref={card1Ref}
                className={`textPorteria ${
                  card1InView ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                <p>
                  El personal de portería se caracteriza por su excelente
                  presencia, siempre vestido con trajes elegantes que reflejan
                  profesionalismo y seriedad. Este equipo se enfoca en la tarea
                  de recepción, asegurándose de que tanto los habitantes como
                  los visitantes del lugar reciban un trato amable y respetuoso
                  en todo momento. La permanencia y la ausencia de rotación del
                  personal inspiran una confianza inquebrantable en quienes
                  frecuentan el lugar, creando un ambiente de seguridad y
                  familiaridad.
                </p>
                <p>
                  Además, el personal de portería se distingue por su perfil
                  proactivo, siempre dispuesto a solucionar problemas de manera
                  eficiente y a brindar ayuda a quien lo necesite. Su capacidad
                  para anticiparse a las necesidades de los residentes y
                  visitantes, junto con su disposición para resolver cualquier
                  inconveniente que surja, asegura una experiencia satisfactoria
                  y sin contratiempos para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePorteria;
