import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import MediaQuery from "react-responsive";

import middletubetransparent from "../images/middle-tube-transparent.png";
import uppertubetransparent from "../images/upper-tube-transparent.png";
import lowertubetransparent from "../images/lower-tube-transparent.png";
import lowertube from "../images/lower-tube.png";

// BOX 3

import box3celu from "../images/boxes/box3.png";
import box3escalera from "../images/boxes/box3-escalera.png";
import box3estrella from "../images/boxes/box3-estrella.png";
import box3estrellatriangulo from "../images/boxes/box3-estrellatriangulo.png";

// BOX 2

import box2celu from "../images/boxes/box2.png";
import box2cuadricula from "../images/boxes/box2-cuadricula.png";

// BOX 1

import box1celu from "../images/boxes/box1.png";
import box1esfera from "../images/boxes/box1-esfera.png";
import box1estrella from "../images/boxes/box1-estrella.png";

// BODY IMAGES

import body1 from "../images/body/body1.png";
import body2 from "../images/body/body2.png";
import body3 from "../images/body/body3.png";
import body4 from "../images/body/body4.png";
import body4b from "../images/body/body4b.png";
import body5 from "../images/body/body5.png";
import body6 from "../images/body/body6.png";
import body7 from "../images/body/body7.png";

export default function Main() {
  const boxRef = useRef();
  let linecontainer = useRef();
  let theline = useRef();
  let scrubcircle = useRef();
  const scrollEnd = 4000;
  const [isDesktop, setDesktop] = useState(false);

  // Loads once on page render
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    gsap.core.globals("MotionPathPlugin", MotionPathPlugin);

    if (window.innerWidth > 750) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 750) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    window.addEventListener("resize", updateMedia);

    // gsap.set(".sarasa", {
    //   transformOrigin: "50% 50%",
    // });

    let scrub = gsap
      .timeline({
        defaults: {},
        scrollTrigger: {
          trigger: linecontainer,
          start: "top top",
          end: `+=${scrollEnd}`,
          scrub: 0.5,

          markers: false,
          toggleActions: "play pause resume reset",
        },
      })
      .to(".coin", {
        ease: "none",
        motionPath: {
          path: ".theline",
          align: ".theline",
          alignOrigin: [0.5, 0.5],
        },
        rotation: "+=360",
        transformOrigin: "50% 50%",
      });

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
    <div className="containerAnimation-box">
      <img src={body1} className="bodyImg bodyImg1" />
      <img src={body2} className="bodyImg bodyImg2" />
      <img src={body3} className="bodyImg bodyImg3" />
      <img src={body4} className="bodyImg bodyImg4" />
      <img src={body4b} className="bodyImg bodyImg4b" />
      <img src={body5} className="bodyImg bodyImg5" />
      <img src={body6} className="bodyImg bodyImg6" />
      <img src={body7} className="bodyImg bodyImg7" />
    
    <div className="containerAnimation">
      <div
        ref={(el) => {
          linecontainer = el;
        }}
        className="linecontainer"
      >
        <MediaQuery minWidth={1225}>
          <svg
            className="pathDsk"
            id="Layer_1"
            data-name="Layer 1"
            height="4000px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1054.0788 4000"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeMiterlimit="1"
          >
            <path
              className="theline"
              ref={(el) => {
                theline = el;
              }}
              // d="M176.22,79v71c0,27.58,7.16,33.5,18.45,42.46,11.87,9.41,26.87,9.95,38.55,9.86l35.21,0A44.78,44.78,0,0,1,301.7,217.7c13.1,13.3,12.13,29.54,12.13,40.89V289.7s1,48.43,1,61.43c0,29.35-26.8,31.3-32.47,31.3h-169c-38.09,0-54,28.18-54,60.53V734.87c0,19.56,17.73,29.6,37.82,29.8s100.7-.58,100.7-.58c24.78,0,30.85,17.48,30.85,24.52.11,10.26.22,16.61.32,26.87,0,22.69,19.18,28.5,28.5,28.5h30.59c45.91,0,71.22,36.45,71.22,66.72v63.91c0,37.82-27.92,77.22-81.13,77.22-42,0-71.62,28.69-71.62,82.83,0,25.3-.64,49.86-.64,82.82"
              d="M410.63 0v249.31c0 96.89 25.16 117.71 64.85 149.18 41.71 33.06 94.41 35 135.43 34.65l123.73-.14c29.56 0 77.69 10.15 116.87 54.15 46.06 46.74 42.62 103.8 42.62 143.67v109.33s3.44 170.17 3.44 215.85c0 103.12-94.18 110-114.11 110H189.73C55.91 1066 0 1165 0 1278.64v1025.67c0 68.74 62.31 104 132.9 104.7s353.81-2 353.81-2c87.08 0 108.4 61.42 108.4 86.16.37 36 .75 58.35 1.13 94.4 0 79.75 67.37 100.14 100.14 100.14h107.47c161.32 0 250.23 128.1 250.23 234.42v224.56C1054.08 3279.56 956 3418 769 3418c-147.57 0-251.63 100.82-251.63 291 0 88.91-2.27 175.19-2.27 291"
              fill="none"
              stroke="#ccc"
              strokeWidth="5"
            />
          </svg>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <svg
            className="pathMobile"
            id="Layer_1"
            data-name="Layer 1"
            // height="4000px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-25 -100 637.64 4000"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeMiterlimit="1"
          >
            <path
              className="theline"
              ref={(el) => {
                theline = el;
              }}
              d="M351.42 0v87.7a126.68 126.68 0 0 1-126.68 126.67h-95.82A126.68 126.68 0 0 0 2.25 341.05V1037a126.67 126.67 0 0 0 126.67 126.67h56.84a126.68 126.68 0 0 1 126.68 126.63v240.35a126.68 126.68 0 0 1-126.68 126.68h-56.84A126.67 126.67 0 0 0 2.25 1784v390.58a126.68 126.68 0 0 0 126.67 126.68 126.68 126.68 0 0 1 126.68 126.67v157.54a126.67 126.67 0 0 0 126.67 126.67h30.86a126.67 126.67 0 0 1 126.67 126.67v551.36c0 70 21.41 128.3-48.55 128.3h-37.52c-98.25 0-182.7 95.82-182.7 177.84V4000"
              fill="none"
              stroke="#ccc"
              strokeWidth="5"
            />
          </svg>
        </MediaQuery>
        <MediaQuery minWidth={769} maxWidth={1224}>
          <svg
            className="pathTablet"
            id="Layer_1"
            data-name="Layer 1"
            height="4000px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 4000"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeMiterlimit="1"
          >
            <path
              className="theline"
              ref={(el) => {
                theline = el;
              }}
              // d="M176.22,79v71c0,27.58,7.16,33.5,18.45,42.46,11.87,9.41,26.87,9.95,38.55,9.86l35.21,0A44.78,44.78,0,0,1,301.7,217.7c13.1,13.3,12.13,29.54,12.13,40.89V289.7s1,48.43,1,61.43c0,29.35-26.8,31.3-32.47,31.3h-169c-38.09,0-54,28.18-54,60.53V734.87c0,19.56,17.73,29.6,37.82,29.8s100.7-.58,100.7-.58c24.78,0,30.85,17.48,30.85,24.52.11,10.26.22,16.61.32,26.87,0,22.69,19.18,28.5,28.5,28.5h30.59c45.91,0,71.22,36.45,71.22,66.72v63.91c0,37.82-27.92,77.22-81.13,77.22-42,0-71.62,28.69-71.62,82.83,0,25.3-.64,49.86-.64,82.82"
              d="M272.2 0v249.31c0 96.89 17.68 116.91 43.06 149.18 17.13 21.78 62.7 35 89.94 34.65l51.37-.12c153.54 0 136.71 197.82 136.71 197.82v109.31s2.29 170.17 2.29 215.85c0 103.12-62.55 110-75.79 110H172.86C28 1066-.5 1165-.5 1278.64v1025.67c0 68.74 41.38 104 88.26 104.7S232 2407 232 2407c63 0 118.21 66.12 118.21 128.2.25 36.06-.25 86 0 122.09 0 79.74-10.1 263 137.41 263H535c44.61 0 164.52 20.8 164.52 226.43 0 104.61 25.27 271.32-189.3 271.32-160.24 0-167.11 112.68-167.11 342.81 0 88.91-1.5 123.42-1.5 239.22"
              fill="none"
              stroke="#ccc"
              strokeWidth="5"
            />
          </svg>
        </MediaQuery>

        <div className="mobileCut">
          <img
            className="tube1 transparent"
            src={lowertubetransparent}
            alt=""
          />
        </div>
        <div className="mobileCut">
          <img className="tube1" src="../images/lower-tube.png" alt="" />
        </div>
        <img className="tube2" src="../images/middle-tube.png" alt="" />
        <img className="tube3" src="../images/upper-tube.png" alt="" />
        <img className="tube4" src="../images/upper-tube.png" alt="" />
        <img className="tube5" src={lowertube} alt="" />

        <img className="tube2 transparent" src={middletubetransparent} alt="" />
        <img className="tube3 transparent" src={uppertubetransparent} alt="" />
        <img className="tube4 transparent" src={uppertubetransparent} alt="" />
        <img className="tube5 transparent" src={lowertubetransparent} alt="" />



        {/* BOX 3 */}
        {/* BOX 3 */}

        <section className="box box3">
          <div className="box-content">
            <div className="box-cel">
              <img src={box3celu} className="cel" />
              <img src={box3escalera} className="escalera" />
              <img src={box3estrella} className="estrella" />
              <img src={box3estrellatriangulo} className="estrellatriangulo" />
            </div>
            <div className="box-caption">
              <div className="box-little">
                Deposita, opera y retira rápido y fácil{" "}
              </div>
              <p>EN ARRIBA PODES</p>
              <h3>
                En arriba gana <br /> recompensas
              </h3>
              <p>
                Con arriba podras ganar hasta un 6% de rentabilidad al año con
                tu inversión de criptomonedas.
              </p>
            </div>
          </div>
        </section>

        {/* FIN BOX 3 */}
        {/* FIN BOX 3 */}

        {/* BOX 2 */}
        {/* BOX 2 */}

        <section className="box box2">
          <div className="box-content">
            <div className="box-cel">
              <img src={box2celu} className="cel" />
              <img src={box2cuadricula} className="cuadricula" />
            </div>
            <div className="box-caption">
              <p>EN ARRIBA PODES</p>
              <h3>
                Compre cryptos <br />
                con solo $1000
              </h3>
              <p>
                Con una primera inversión minima puedes comenzar a comprar
                criptos como Bitcoin y Ethereum.
              </p>
              <div className="box-little">
                Deposita, opera y retira rápido y fácil{" "}
              </div>
            </div>
          </div>
        </section>

        {/* FIN BOX 2 */}
        {/* FIN BOX 2 */}

        {/* BOX 1 */}
        {/* BOX 1 */}

        <section className="box box1">
          <div className="box-content">
            <div className="box-cel">
              <img src={box1celu} className="cel" />
              <img src={box1esfera} className="box1esfera" />
              <img src={box1estrella} className="box1estrella" />
            </div>
            <div className="box-caption">
              <p>EN ARRIBA PODES</p>
              <h3>
                Invierte fácil <br /> desde tu celular
              </h3>
              <p>
                Con una cuenta de arriba, puedes invertir rápido y fácil desde
                la comodidad de tu celular.
              </p>
              <div className="box-little">
                Deposita, opera y retira rápido y fácil{" "}
              </div>
            </div>
          </div>
        </section>

        {/* FIN BOX 1 */}
        {/* FIN BOX 1 */}

        <div className="coinContainer">
          <img
            className="coin"
            ref={(el) => {
              scrubcircle = el;
            }}
            src="../images/coin.png"
            alt=""
            transform="translate(-1129.746 1550.326)"
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
