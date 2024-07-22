import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { storage } from ".././firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";

function Work() {
  const form = useRef();
  const [cvUrl, setCvUrl] = useState("");

  const uploadCv = async (file) => {
    const storageRef = ref(storage, `cvs/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const cvFile = formData.get("cv");

    try {
      const uploadedCvUrl = await uploadCv(cvFile);
      formData.append("cv_url", uploadedCvUrl); // Añadir el URL del CV al FormData

      // Crear un objeto a partir del FormData
      const emailData = {
        user_name: formData.get("user_name"),
        user_telephone: formData.get("user_telephone"),
        user_email: formData.get("user_email"),
        message: formData.get("message"),
        cv_url: uploadedCvUrl, // Añadir el URL del CV aquí
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CV_TEMPLATE_ID,
          emailData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
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
    } catch (error) {
      console.error("Error uploading CV:", error);
    }
  };

  return (
    <>
      <div className="hero-work">
        <div className="work-content container">
          <h2 className="titleWork mt-5">Trabaja con nosotros</h2>
          <p className="text-center">
            Te damos la bienvenida a{" "}
            <span className="titleSparta">Spartan</span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row work-content">
          <div className="col-12 d-flex justify-content-center">
            <div className="contNuestraCultura">
              <h2 className="titleCultura">Nuesta cultura</h2>
              <p>
                En <span className="titleSparta">Spartan</span>, creemos
                firmemente que nuestras personas son nuestro mayor recurso y la
                clave de nuestro éxito. Nuestro equipo está compuesto por
                profesionales dedicados y apasionados por la seguridad, y
                estamos siempre en la búsqueda de personas talentosas que
                compartan nuestro compromiso con la excelencia. Nos
                enorgullecemos de crear un entorno de trabajo donde cada miembro
                del equipo se siente valorado y respetado. Fomentamos una
                cultura de inclusión, colaboración y crecimiento profesional,
                donde cada persona tiene la oportunidad de desarrollarse y
                alcanzar su máximo potencial.
              </p>
            </div>
          </div>

          <div className="col-12 mt-5 mb-5">
            <div className="col-md-12">
              <form
                className="contact-form"
                ref={form}
                onSubmit={sendEmail}
                encType="multipart/form-data"
              >
                <h3 className="titleFormWork">Aplicar aquí</h3>
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
                    type="tel"
                    name="user_telephone"
                    id="user_telephone"
                    pattern="^\+?[0-9\s\-\(\)]+$"
                    title="Por favor, ingresa un número de teléfono válido"
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
                  <label htmlFor="cv">Adjuntar CV</label>
                  <input
                    style={{ fontSize: "1.5rem" }}
                    className="form-control"
                    type="file"
                    name="cv"
                    id="cv"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    style={{ height: "200px", fontSize: "1.5rem" }}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
