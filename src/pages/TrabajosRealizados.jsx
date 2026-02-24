import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function TrabajosRealizados() {
  // Lista de tus trabajos para mapear fácilmente
  const proyectosRecientes = [
    {
      id: 1,
      titulo: "Ed. Masmio Guayabos",

      img: "/img/recientes/edmasmioguayabos.jpeg",
    },
    {
      id: 2,
      titulo: "Fiancar",

      img: "/img/recientes/fiancar01.jpeg",
    },
    {
      id: 3,
      titulo: "Fiancar",

      img: "/img/recientes/fiancar02.jpeg",
    },
    {
      id: 4,
      titulo: "McDonald's",

      img: "/img/recientes/mcdonalds01.jpeg",
    },
    {
      id: 5,
      titulo: "McDonald's",

      img: "/img/recientes/mcdonalds02.jpeg",
    },
    {
      id: 6,
      titulo: "McDonald's",

      img: "/img/recientes/mcdonalds03.jpeg",
    },
  ];

  const proyectosEnProceso = [
    {
      id: 1,
      titulo: "Costanera Village",

      img: "/img/proceso/costaneravillage01.jpg",
    },
    {
      id: 2,
      titulo: "Costanera Village",

      img: "/img/proceso/costaneravillage02.jpg",
    },
    {
      id: 3,
      titulo: "Costanera Village",

      img: "/img/proceso/costaneravillage03.jpg",
    },
    {
      id: 4,
      titulo: "Costanera Village",

      img: "/img/proceso/costaneravillage04.jpg",
    },
    {
      id: 5,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos01.jpeg",
    },
    {
      id: 6,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos02.jpeg",
    },
    {
      id: 7,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos03.jpeg",
    },
    {
      id: 8,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos04.jpeg",
    },
    {
      id: 9,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos05.jpeg",
    },
    {
      id: 10,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos06.jpeg",
    },
    {
      id: 11,
      titulo: "Laboratorio ICLOS",

      img: "/img/proceso/iclos07.jpeg",
    },
  ];

    const proyectosRealizados = [
      { id: 1, titulo: "Acapulco", img: "/img/realizados/acapulco.jpeg" },
      {
        id: 2,
        titulo: "Brababiarritz",
        img: "/img/realizados/brababiarritz.jpeg",
      },

      { id: 5, titulo: "Gala Puerto", img: "/img/realizados/galapuerto.jpeg" },
      {
        id: 6,
        titulo: "Imperiable",
        img: "/img/realizados/imperiable01.jpeg",
      },
      {
        id: 7,
        titulo: "Imperiable",
        img: "/img/realizados/imperiable02.jpeg",
      },
      { id: 8, titulo: "Indigo", img: "/img/realizados/indigo.jpeg" },
      { id: 9, titulo: "Mythos", img: "/img/realizados/MYTHOS.jpeg" },
      { id: 10, titulo: "Norte", img: "/img/realizados/NORTE.jpeg" },
      { id: 11, titulo: "Novino", img: "/img/realizados/NOVINO.jpeg" },
      { id: 12, titulo: "Ocean Drive", img: "/img/realizados/oceandrive.jpeg" },
      { id: 13, titulo: "Prestigio", img: "/img/realizados/PRESTIGIO.jpeg" },
      { id: 14, titulo: "Silente", img: "/img/realizados/SILENTE.jpeg" },
      { id: 15, titulo: "Torre Lobos", img: "/img/realizados/TORRELOBOS.jpeg" },
      {
        id: 16,
        titulo: "Torre Lobos Pta",
        img: "/img/realizados/TORRELOBOSPTA.jpeg",
      },
      {
        id: 17,
        titulo: "Torres Blancas",
        img: "/img/realizados/TORRES BLANCAS.jpeg",
      },
      { id: 18, titulo: "Torreyoo", img: "/img/realizados/TORREYOO.jpeg" },
      { id: 19, titulo: "Yoo", img: "/img/realizados/YOO.jpeg" },
    ];
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <>
        <div className="hero-contact">
          <div className="contact-content container">
            <h2 className="titleContact">Nuestros Trabajos</h2>

            <Container className="py-5">
              <Row ref={ref}>
                <h2 className="text-center mt-4 mb-5">En Proceso</h2>
                {proyectosEnProceso.map((proyecto) => (
                  <Col key={proyecto.id} xs={12} md={6} lg={4} className="mb-4">
                    <div
                      className={
                        inView ? "animate__animated animate__fadeInUp" : ""
                      }
                    >
                      <Card className="h-100 shadow-sm border-0">
                        {/* Agregamos la imagen aquí */}
                        <Card.Img
                          variant="top"
                          src={proyecto.img}
                          style={{ height: "200px", objectFit: "cover" }}
                          alt={proyecto.titulo}
                        />
                        <Card.Body>
                          <Card.Title>{proyecto.titulo}</Card.Title>
                          <Card.Text>{proyecto.desc}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
                <h2 className="text-center mt-4 mb-5">Más Recientes</h2>
                {proyectosRecientes.map((proyecto) => (
                  <Col key={proyecto.id} xs={12} md={6} lg={4} className="mb-4">
                    <div
                      className={
                        inView ? "animate__animated animate__fadeInUp" : ""
                      }
                    >
                      <Card className="h-100 shadow-sm border-0">
                        {/* Agregamos la imagen aquí */}
                        <Card.Img
                          variant="top"
                          src={proyecto.img}
                          style={{ height: "200px", objectFit: "cover" }}
                          alt={proyecto.titulo}
                        />
                        <Card.Body>
                          <Card.Title>{proyecto.titulo}</Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
                <h2 className="text-center mt-4 mb-5">Realizados</h2>
                {proyectosRealizados.map((proyecto) => (
                  <Col key={proyecto.id} xs={12} md={6} lg={4} className="mb-4">
                    <div
                      className={
                        inView ? "animate__animated animate__fadeInUp" : ""
                      }
                    >
                      <Card className="h-100 shadow-sm border-0">
                        {/* Agregamos la imagen aquí */}
                        <Card.Img
                          variant="top"
                          src={proyecto.img}
                          style={{ height: "200px", objectFit: "cover" }}
                          alt={proyecto.titulo}
                        />
                        <Card.Body>
                          <Card.Title>{proyecto.titulo}</Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
}

export default TrabajosRealizados;
