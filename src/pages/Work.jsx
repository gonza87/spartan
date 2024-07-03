import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { storage } from ".././firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
        user_email: formData.get("user_email"),
        message: formData.get("message"),
        cv_url: uploadedCvUrl, // Añadir el URL del CV aquí
      };

      console.log(emailData); // Verifica que los datos incluyan el cv_url

      emailjs
        .send(
          "service_als3jen",
          "template_tfhip0g",
          emailData,
          "-lChSG6BfOJBOWtiG"
        )
        .then(
          () => {
            console.log("SUCCESS!");
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
          <div className="col-12">
            <h2 className="text-center">Nuesta cultura</h2>
            <p>
              En <span className="titleSparta">Spartan</span>, creemos
              firmemente que nuestras personas son nuestro mayor recurso y la
              clave de nuestro éxito. Nuestro equipo está compuesto por
              profesionales dedicados y apasionados por la seguridad, y estamos
              siempre en la búsqueda de personas talentosas que compartan
              nuestro compromiso con la excelencia. Nos enorgullecemos de crear
              un entorno de trabajo donde cada miembro del equipo se siente
              valorado y respetado. Fomentamos una cultura de inclusión,
              colaboración y crecimiento profesional, donde cada persona tiene
              la oportunidad de desarrollarse y alcanzar su máximo potencial.
            </p>
          </div>

          <div className="col-12">
            <div className="col-md-12">
              <form
                className="contact-form"
                ref={form}
                onSubmit={sendEmail}
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="user_name">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    name="user_name"
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
                  <label htmlFor="cv">Adjuntar CV</label>
                  <input
                    className="form-control"
                    type="file"
                    name="cv"
                    id="cv"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
