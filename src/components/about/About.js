import React from "react";
import aboutImage from "../../assets/images/aboutImage.jpg";

const About = () => {
  return (
    <div className="container my-5" style={{ minHeight: "600px" }}>
      <h2 className="text-center display-4">¿Quiénes Somos?</h2>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <hr
          className="border-5 border-top border-primary rounded"
          style={{ width: "30%", background: "red" }}
        />
      </div>
      <div className="row rounded" style={{ background: "#1f150d" }}>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={aboutImage} alt="about" className="img-fluid rounded" />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-3">
          <p className="mb-3 text-white">
            La Empresa nació en el 2020, Fundada por Miguel Apraez y Paola
            Andrea Lazo, con la mentalidad de cubrir las necesidades de las
            personas en el nicho de Globos, al ver que no se contaba con una
            empresa que de un buen servicio y que se ajuste a las necesidades de
            los clientes.
          </p>
          <p className="text-white">
            La Misión de la empresa es brindar a todos nuestros clientes él más
            completo surtido de artículos de fiesta para cada uno de sus
            momentos especiales con el más alto nivel de excelencia y calidad en
            nuestro servicio.
          </p>
          <p className="text-white">
            La Visión es mantener nuestro posicionamiento como empresa referente
            en el sector de la distribución de artículos de fiesta y
            celebraciones. Al año 2032 ser reconocidos como la empresa líder en
            el sector de eventos y fiesta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
