import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { VscSend } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
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
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Enviado corréctamente",
          });
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
          <div className="col-md-4 mt-5">
            <div
              ref={card1Ref}
              className={`contenedorDatos ${
                card1InView ? "animate__animated animate__fadeInLeftBig" : ""
              }`}
            >
              <div>
                <p className="titleDatos">Teléfono:</p>
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

              <div className="mt-4">
                <p className="titleDatos">Email:</p>
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

              <div className="mt-4">
                <p className="titleDatos">Horario de atención al cliente:</p>
                <p className="textoDatos"> Lu a vier de 9 a 18 hrs</p>
              </div>
            </div>
          </div>

          <div className="col-md-8 mb-5">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h2 className="titleFormContact">
                Si deseas más información, puedes ponerte en contacto con
                nosotros a través del siguiente formulario.
              </h2>
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
                <label htmlFor="user_telephone">Teléfono</label>
                <input
                  style={{ fontSize: "1.5rem" }}
                  className="form-control"
                  type="number"
                  name="user_telephone"
                  id="user_telephone"
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
                  style={{ height: "200px" }}
                  className="form-control"
                  name="message"
                  id="message"
                  required
                />
              </div>

              <button type="submit" className="btnSendContact" value="Send">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* <div className="col-md-6">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
