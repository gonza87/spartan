import React from "react";
import { useInView } from "react-intersection-observer";

function ServiceLimpiezaMantenimiento() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="hero-limpiezaMantenimiento">
        <div className="limpiezaMantenimiento-content container">
          <h2 className="titleLimpiezaMantenimiento mt-5">
            Limpieza y mantenimiento
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row limpiezaMantenimiento-content">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div>
              <div>
                <img
                  src="../.././img/limpieza.jpg"
                  alt=""
                  className="img-fluid imgLimpieza"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center textLimpieza">
            <div
              ref={card1Ref}
              className={`${
                card1InView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <p>
                Nuestro personal capacitado en limpieza y mantenimiento,
                debidamente uniformado, se distingue por su eficiencia y
                dedicación en cada tarea realizada. Nuestros empleados se
                esfuerzan por mantener altos estándares de calidad en todos los
                aspectos de sus labores, asegurando que cada rincón de sus
                instalaciones esté impecable.
              </p>
              <p>
                Utilizamos insumos, materiales y maquinaria de primera calidad
                para garantizar resultados excepcionales. Desde aspiradoras
                industriales y pulidoras de pisos hasta productos de limpieza
                específicos para cada tipo de superficie, cada herramienta es
                seleccionada meticulosamente para optimizar la eficacia y
                seguridad del trabajo.
              </p>
              <p>
                Además, para añadir un toque de exclusividad a sus ambientes,
                empleamos fragancias de renombre que no solo refrescan los
                espacios, sino que también ofrecen una experiencia olfativa
                agradable y sofisticada. Esta atención al detalle es un reflejo
                de nuestro compromiso por brindar un servicio superior que
                supera las expectativas de nuestros clientes.
              </p>
              <p>
                Nuestro equipo se enorgullece de su profesionalismo y
                compromiso, trabajando con esmero para asegurar la satisfacción
                total de quienes confían en nosotros para la limpieza y
                mantenimiento de sus instalaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceLimpiezaMantenimiento;
