import React from "react";
import { useState, useEffect } from "react";
import { IoMdQuote } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,

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
              <IoMdQuote color="#D72323" size="2rem" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
