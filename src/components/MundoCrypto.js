import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "./Link";
import barrasblancas from "../images/bar-white.png";
import escalera from "../images/mundocrypto/escalera.png";
import SliderComponent from "./SliderComponent";

const MundoCrypto = () => {
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "+=3900 0",
      scrub: 3,
    },
    defaults: { opacity: 1, duration: 0.6, x: 50, ease: "ease-in" },
  });

  useEffect(() => {
    const barFirst = document.querySelector(".bars .first");
    const barSecond = document.querySelector(".bars .second");
    const aprende = document.querySelector(".mundo-crypto__left p");
    const mundocrypto = document.querySelector(".mundo-crypto__left h2");
    const btnmundocrypto = document.querySelector(
      ".mundo-crypto__left .buttonContent2"
    );

    const title = document.querySelector(".HazLaPrueba .title");
    const copy = document.querySelector(".HazLaPrueba .copy");
    const calculadora = document.querySelector(".calculadora");
    const marquee = document.querySelector(".marquee");

    const imagesFooter = document.querySelectorAll(".imgFooter");
    // const footerP = document.querySelectorAll('.footer .container p');
    // const footerH2 = document.querySelectorAll('.footer .container h2');
    // const footerBrand = document.querySelectorAll('.footer .container .brand');

    timeline
      .from(barFirst, {
        stagger: 0.3,
        opacity: 0,
      })
      .from(
        barSecond,
        {
          stagger: 0.3,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        aprende,
        {
          stagger: 0.3,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        mundocrypto,
        {
          stagger: 0.3,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        btnmundocrypto,
        {
          stagger: 0.3,
          scale: 0.9,
          scrub: 1,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        title,
        {
          stagger: 0.3,
          scale: 0.9,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        copy,
        {
          stagger: 0.5,
          x: -100,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        calculadora,
        {
          stagger: 0.3,
          scale: 0.9,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        marquee,
        {
          stagger: 0.3,
          scale: 0.9,
          duration: 1,
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        imagesFooter,
        {
          stagger: 0.3,
          scale: 0.3,
          duration: 1,
          opacity: 0,
        },
        "-=.5"
      );
  }, []);

  return (
    <>
      <section className="mundo-crypto">
        <div className="container">
          <div className="escalera2">
            <img src={escalera} />
          </div>
          <figure className="bars">
            <img src={barrasblancas} className="first" />
            <img src={barrasblancas} className="second" />
          </figure>
          <div className="mundo-crypto__left">
            <p>APRENDE COMO</p>
            <h2>
              &nbsp;&nbsp;Mundo <br /> <span></span>Crypto
            </h2>
            <div className="buttonContent2">
              <Link copy="Ver todos" className="icon-arrow-right" />
            </div>
          </div>
          <div className="mundo-crypto__right">
            <div className="forSlide">
              <SliderComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MundoCrypto;
