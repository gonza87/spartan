import React from "react";

function ServiceLimpiezaObra() {
  return (
    <>
      <div className="hero-limpiezaObra">
        <div className="limpiezaObra-content container">
          <h2 className="titlePorteria mt-5">Limpieza de obra</h2>
        </div>
      </div>
      <div className="container">
        <div className="row limpiezaObra-content">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div>
              <div>
                <img
                  src="../.././img/limpiezaobra.jpg"
                  alt=""
                  className="img-fluid imgLimpiezaobra"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="textPorteria">
              <p>
                La limpieza de obra es una tarea esencial que requiere atención
                meticulosa y una gran dedicación. Nuestro personal altamente
                capacitado se enfoca en cada detalle, removiendo cuidadosamente
                los restos de materiales de construcción y utilizando productos
                específicos que aseguran una limpieza profunda sin dañar las
                superficies adyacentes.
              </p>
              <p>
                En una obra, generalmente se lleva a cabo una limpieza primaria.
                Durante esta etapa inicial, se eliminan los desechos más grandes
                y se limpian las superficies principales, permitiendo que se
                evidencien detalles que necesitan ser retocados o corregidos.
                Este paso es crucial, ya que permite identificar y abordar
                cualquier imperfección o problema antes de avanzar a la etapa
                final.
              </p>
              <p>
                Una vez realizados los retoques y correcciones necesarios,
                nuestro equipo procede a realizar la limpieza final. Esta etapa
                es aún más detallada y exhaustiva, garantizando que todas las
                superficies queden en perfectas condiciones para su
                habitabilidad. Nuestro compromiso con la calidad y la
                satisfacción del cliente se refleja en la dedicación y el
                esfuerzo que ponemos en cada proyecto, asegurando un resultado
                impecable y un espacio listo para ser disfrutado.
              </p>
              <p>
                Este proceso meticuloso no solo resalta nuestra profesionalidad,
                sino también nuestra capacidad para ofrecer resultados
                superiores, cuidando cada detalle y garantizando un entorno
                limpio y seguro para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceLimpiezaObra;
