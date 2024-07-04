import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { VscSend } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "animate.css";

function Contact() {
  const form = useRef();
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_als3jen", "template_n0ho9al", form.current, {
        publicKey: "-lChSG6BfOJBOWtiG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Error al copiar el correo al portapapeles:", error);
    }
  };

  const handleCall = () => {
    const phoneNumber = "+598000000";
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    const whatsappLink = `https://wa.me/+5980000000`;

    window.location.href = whatsappLink;
  };

  return (
    <>
      <div className="hero-contact">
        <div className="contact-content container">
          <h2 className="titleContact mt-5">Contacto</h2>
          <p className="text-center">
            Contáctanos por email, whatsapp o teléfono
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row contact-content">
          <div className="col-md-12 mb-5">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">Nombre</label>
                <input
                  style={{ fontSize: "1.5rem" }}
                  className="form-control"
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  style={{ fontSize: "1.5rem" }}
                  className="form-control"
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  style={{ fontSize: "1.5rem" }}
                  className="form-control"
                  name="message"
                  id="message"
                  required
                />
              </div>

              <button type="submit" className="btnSendContact" value="Send">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div
              ref={card1Ref}
              className={`contenedorDatos ${
                card1InView
                  ? "animate__animated animate__fadeInLeftBig animate__slow"
                  : ""
              }`}
            >
              <p className="titleDatos">Teléfono:</p>
              <div>
                <p className="textoDatos">+598 00 00 00</p>
                <IoCallOutline
                  size={20}
                  className="btnDatos"
                  onClick={handleCall}
                />
                <FaWhatsapp
                  size={20}
                  className="ms-3 btnDatos"
                  onClick={handleWhatsappClick}
                />
              </div>

              <p className="titleDatos">Email:</p>
              <div>
                <p className="textoDatos"> seguridad@gmail.com</p>
                <VscSend
                  className="btnDatos"
                  size={20}
                  onClick={handleSendEmail}
                />
                <IoCopyOutline
                  className="ms-3 btnDatos"
                  size={20}
                  onClick={handleCopyEmail}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              ref={card2Ref}
              className={`contenedorHorarios ${
                card2InView
                  ? "animate__animated animate__fadeInUpBig animate__slow"
                  : ""
              }`}
            >
              <p className="titleDatos">Horario laboral:</p>
              <p className="textoDatos">Lunes 10:00 - 18:00</p>
              <p className="textoDatos">Martes 10:00 - 18:00</p>
              <p className="textoDatos">Miércoles 10:00 - 18:00</p>
              <p className="textoDatos">Jueves 10:00 - 18:00</p>
              <p className="textoDatos">Viernes 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
