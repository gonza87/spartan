import React from "react";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };
  const email = "seguridad@gmail.com";
  const subject = "";
  const body = "";

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
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btnSendContact">
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
