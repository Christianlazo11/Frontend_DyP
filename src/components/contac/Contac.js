import React, { useState, useRef } from "react";
import "./contac.css";
import { FaHandPointRight, FaMobileAlt, FaMailBulk } from "react-icons/fa";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";

const Contac = () => {
  const [isSendForm, setIsSendForm] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_zpxwa1h",
        "template_ndb0kcb",
        form.current,
        "KWav6B5QmBymefyPU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" container" style={{ minHeight: "600px" }}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 p-3 ">
          <div className="card cardleft py-5 px-5 border-0 rounded">
            <h2 className="text-center fw-bold display-5 mb-4 text-secondary">
              Contacto
            </h2>
            <Formik
              initialValues={{
                userName: "",
                email: "",
                phone: "",
                message: "",
              }}
              validate={(valores) => {
                let error = {};

                //Validación de nombre
                if (!valores.userName) {
                  error.userName = "Por favor Ingrese Un Nombre";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.userName)) {
                  error.userName =
                    "El nombre solo puede contener letras y espacios";
                }

                //Validación de email
                if (!valores.email) {
                  error.email = "Por favor Ingrese Un Correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.email
                  )
                ) {
                  error.email =
                    "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
                }

                if (!valores.phone) {
                  error.phone = "Por favor Ingrese un Teléfono";
                }

                return error;
              }}
              onSubmit={(valores, { resetForm }) => {
                console.log(valores);
                sendEmail();
                resetForm();
                setIsSendForm(true);
                setTimeout(() => setIsSendForm(false), 5000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => (
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="form-group w-100 mb-3">
                    <input
                      type="text"
                      name="userName"
                      placeholder="Nombre *"
                      className="border-0 bg-transparent border-bottom border-secondary w-100 py-1"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.userName && errors.userName && (
                      <div className="text-danger">{errors.userName}</div>
                    )}
                  </div>

                  <div className="form-group w-100 mb-3">
                    <input
                      type="text"
                      name="email"
                      placeholder="Correo Electrónico *"
                      className="border-0 bg-transparent border-bottom border-secondary w-100 py-1"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group w-100">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Teléfono *"
                      className="border-0 bg-transparent border-bottom border-secondary w-100 py-1"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <div className="text-danger mb-3">{errors.phone}</div>
                  )}

                  <div className="form-group w-100 mb-3 mt-2">
                    <textarea
                      name="message"
                      id=""
                      rows="4"
                      className="w-100 bg-transparent border-bottom border-secondary rounded"
                      placeholder="Mensaje"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="text-white">
                      Enviar <FaHandPointRight className="iconContact" />
                    </button>
                  </div>
                  {isSendForm && (
                    <div className="text-success text-center mt-2">
                      Formulario Enviado Correctamente
                    </div>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 p-5 cardright">
          <div className="card border-0 row d-flex align-items-center w-100">
            <div
              className="col-12 col-sm-12 col-md-12 card border-0 p-3 d-flex flex-row align-items-center justify-content-center gap-2 text-secondary mb-5 cardContact"
              style={{ backgroundColor: "#f5e37d" }}
            >
              <FaMobileAlt className="display-3" />
              <div className="d-flex flex-column">
                <span className="me-3 fs-5">Escríbenos</span>
                <span className="fs-3">3155167275</span>
              </div>
            </div>

            <div
              className="col-12 col-sm-12 col-md-12 card border-0 p-3 d-flex flex-row align-items-center justify-content-center gap-2 text-secondary mb-5 cardContact"
              style={{ backgroundColor: "#f5e37d" }}
            >
              <FaMobileAlt className="display-3" />
              <div className="d-flex flex-column">
                <span className="me-3 fs-5">Escríbenos</span>
                <span className="fs-3">3146885817</span>
              </div>
            </div>

            <div
              className="col-12 col-sm-12 col-md-12 card border-0 p-3 d-flex flex-row align-items-center justify-content-center gap-2 text-secondary mb-5 cardContact"
              style={{ backgroundColor: "#f5e37d" }}
            >
              <FaMailBulk className="display-3" />
              <div className="d-flex flex-column">
                <span className="me-3 fs-5">Escríbenos</span>
                <span className="">valeryLasso2408@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contac;
