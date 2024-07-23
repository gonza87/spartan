import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

function ServiceSeguridadVigilancia() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="hero-seguridadVigilancia">
        <div className="seguridadVigilancia-content container">
          <h2 className="titleseguridadVigilancia mt-5">
            Seguridad y vigilancia
          </h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row seguridadVigilancia-content">
          <div className="col-12 col-lg-5">
            <div className="contImgVigilancia">
              <img
                src="../.././img/vigilancia.jpg"
                alt=""
                className="img-fluid custom-img-size"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div
              ref={card1Ref}
              className={`${
                card1InView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <p>
                <strong>Prevención de Delitos </strong>
              </p>
              <ul>
                <li>
                  Visibilidad y Disuasión: La presencia física del vigilante,
                  junto con su uniforme, actúa como un disuasivo visual para
                  posibles delincuentes. La percepción de vigilancia constante
                  reduce significativamente las oportunidades de cometer actos
                  ilícitos.
                </li>
                <li>
                  Controles de Accesos: El vigilante realiza controles en puntos
                  de entrada y salida, verificando la identidad y autorizaciones
                  de las personas que ingresan o salen del lugar. Esto previene
                  el acceso no autorizado y permite mantener un registro de
                  visitantes.
                </li>
                <li>
                  Rondas Perimetrales: Las rondas regulares por el perímetro y
                  áreas sensibles del establecimiento permiten detectar y
                  prevenir posibles vulnerabilidades, como puertas abiertas o
                  cerraduras dañadas.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              ref={card2Ref}
              className={`${
                card2InView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <p>
                <strong>Actuación ante Delitos</strong>
              </p>
              <ul>
                <li>
                  Respuesta Inmediata: Ante cualquier incidente, el vigilante
                  actúa de inmediato según los protocolos establecidos, que
                  pueden incluir la retención del sospechoso y la protección de
                  la escena del crimen.
                </li>
                <li>
                  Comunicación Efectiva: Es fundamental que el vigilante
                  comunique cualquier suceso detectado a sus superiores y, si es
                  necesario, a las autoridades correspondientes. Una
                  comunicación clara y oportuna puede ser crucial para una
                  resolución efectiva del incidente.
                </li>
                <li>
                  Recopilación de Evidencias: El vigilante debe ser capaz de
                  recopilar y documentar evidencias relevantes, como videos de
                  cámaras de seguridad y testimonios, que pueden ser esenciales
                  para una investigación posterior.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              ref={card3Ref}
              className={`${
                card3InView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <p>
                <strong>Importancia de la Persona Física y el Uniforme</strong>
              </p>
              <ul>
                <li>
                  Imagen de Autoridad: El uniforme del vigilante no solo
                  identifica su rol, sino que también proyecta una imagen de
                  autoridad y seguridad, lo que puede influir en el
                  comportamiento de las personas y promover un entorno seguro.
                </li>
                <li>
                  Confianza y Seguridad: La presencia física de un vigilante
                  uniformado genera un sentido de protección entre los empleados
                  y visitantes, creando un ambiente de confianza.
                </li>
                <li>
                  Profesionalismo: Un uniforme bien cuidado y una actitud
                  profesional reflejan el compromiso del vigilante con su
                  trabajo y su capacidad para manejar situaciones de seguridad
                  con eficacia.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSeguridadVigilancia;
