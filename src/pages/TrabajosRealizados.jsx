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

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <div className="hero-contact">
        <div className="contact-content container">
          <h2 className="titleContact">Nuestros Trabajos</h2>

          <Container className="py-5">
            <h2 className="text-center mb-5">Recientes</h2>
            <Row ref={ref}>
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
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TrabajosRealizados;
