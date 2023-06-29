import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Calculadora from "./Calculadora";

import imagen1 from "../images/hazlaprueba/img-calc.png";
import imagen2 from "../images/hazlaprueba/img2-calc.png";
import imagen3 from "../images/img3-calc.png";
import imagen4 from "../images/img4-calc.png";
import Dinero from "./Dinero";

const HazLaPrueba = () => {
  return (
    <>
      <section id="HazLaPrueba" className="HazLaPrueba">
        <div className="shape shape1">
          <img src={imagen1} className="shapeImage" />
        </div>
        <div className="shape shape2">
          <img src={imagen2} className="shapeImage" />
        </div>
        <div className="shape shape3">
          <img src={imagen3} className="shapeImage" />
        </div>
        <div className="shape shape4">
          <img src={imagen4} className="shapeImage" />
        </div>
        <div className="container">
          <h3 className="title">Haz la prueba</h3>
          <p className="copy">
            Convierte tu dinero en criptomonedas <br />y descrubre los
            beneficios de usarla
          </p>
          <Calculadora />
        </div>
        <section className="marquee">
          <Dinero text="Tu dinero a tu manera" />
        </section>
      </section>
    </>
  );
};
export default HazLaPrueba;
