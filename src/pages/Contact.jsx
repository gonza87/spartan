import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { VscSend } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d64lp8a", "template_ttgho2k", form.current, {
        publicKey: "m3I44tUotLmRmkF54",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
          <div className="col-md-12">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="user_name "
                  id="user_name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="user_email"
                  id="user_email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                />
              </div>

              <button type="submit" className="btnSendContact" value="Send">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contenedorDatos">
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
            <div className="contenedorHorarios">
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
