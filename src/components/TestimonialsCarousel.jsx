// TestimonialsCarousel.js
import React from "react";
import { IoMdQuote } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { id: 1, text: "¡Este producto es increíble!", author: "Juan Pérez" },
  { id: 2, text: "Servicio al cliente excepcional.", author: "Ana López" },
  {
    id: 3,
    text: "Definitivamente recomendaría esto a mis amigos.",
    author: "Luis Gómez",
  },
  // Agrega más testimonios aquí
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    nextArrow: null,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.text}</p>
            <div className="d-flex justify-content-around align-items-center">
              <h4>{testimonial.author}</h4>
              <IoMdQuote color="#D72323" size="1.5rem" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
