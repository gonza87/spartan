import React from "react";
import { useInView } from "react-intersection-observer";

function ServiceLimpiezaObra() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="hero-limpiezaObra">
        <div className="limpiezaObra-content container">
          <h2 className="titleLimpiezaObra">Limpieza de obra</h2>
          <div className="row limpiezaObra-content">
            <div className="col-12 col-lg-6 d-flex justify-content-center order-lg-2">
              <div className="animate__animated animate__zoomIn">
                <img
                  src="../.././img/limpiezaobra.jpg"
                  alt="limpieza"
                  className="img-fluid imgLimpiezaobra"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center order-lg-1">
              <div
                ref={card1Ref}
                className={`textLimpiezaObra ${
                  card1InView ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                <p>
                  La limpieza de obra es una tarea esencial que requiere
                  atención meticulosa y una gran dedicación. Nuestro personal
                  altamente capacitado se enfoca en cada detalle, removiendo
                  cuidadosamente los restos de materiales de construcción y
                  utilizando productos específicos que aseguran una limpieza
                  profunda sin dañar las superficies adyacentes.
                </p>
                <p>
                  En una obra, generalmente se lleva a cabo una limpieza
                  primaria. Durante esta etapa inicial, se eliminan los desechos
                  más grandes y se limpian las superficies principales,
                  permitiendo que se evidencien detalles que necesitan ser
                  retocados o corregidos. Este paso es crucial, ya que permite
                  identificar y abordar cualquier imperfección o problema antes
                  de avanzar a la etapa final.
                </p>
                <p>
                  Una vez realizados los retoques y correcciones necesarios,
                  nuestro equipo procede a realizar la limpieza final. Esta
                  etapa es aún más detallada y exhaustiva, garantizando que
                  todas las superficies queden en perfectas condiciones para su
                  habitabilidad. Nuestro compromiso con la calidad y la
                  satisfacción del cliente se refleja en la dedicación y el
                  esfuerzo que ponemos en cada proyecto, asegurando un resultado
                  impecable y un espacio listo para ser disfrutado.
                </p>
                <p>
                  Este proceso meticuloso no solo resalta nuestra
                  profesionalidad, sino también nuestra capacidad para ofrecer
                  resultados superiores, cuidando cada detalle y garantizando un
                  entorno limpio y seguro para nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceLimpiezaObra;
