import React from "react";
import ReactDOM from "react-dom";

import Slider from "react-slick";
import Slide from "./Slide";
import comisiones from "../images/mc-comisiones.png";
import retiros from "../images/mc-retiros.png";
import activos from "../images/mc-activos.png";
import invertir from "../images/mc-invertir.png";
import recompensas from "../images/mc-recompensas.png";
import tasas from "../images/mc-tasas.png";
import Modal from "./Modal";
import { useModal } from "./useModal";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  return (
    <>
      <div>
        <Slider {...settings}>
          <Slide
            step="1"
            title="Comisiones"
            link={openModal1}
            copy="Arriba cobra el 1% para compras y ventas. Esto significa que si compras o vendes una cripto ..."
            image={comisiones}
          />
          <Slide
            step="2"
            title="Retiros"
            link={openModal2}
            copy="Arriba cobra el 1% para compras y ventas. Esto significa que si compras o vendes una cripto ..."
            image={retiros}
          />
          <Slide
            step="3"
            title="Activos"
            link={openModal3}
            copy="Arriba cobra el 1% para compras y ventas. Esto significa que si compras o vendes una cripto ..."
            image={activos}
          />
          <Slide
            step="4"
            title="Invertir"
            link={openModal4}
            copy="Arriba cobra el 1% para compras y ventas. Esto significa que si compras o vendes una cripto ..."
            image={invertir}
          />
          <Slide
            step="5"
            title="Recompensas"
            link={openModal5}
            copy="Arriba cobra el 1% para compras y ventas. Esto significa que si compras o vendes una cripto ..."
            image={recompensas}
          />
          <Slide
            step="6"
            title="Tasas"
            link={openModal6}
            copy="Arriba cobra el 1% para compras y ventas. Esto significa que si compras o vendes una cripto ..."
            image={tasas}
          />
        </Slider>
      </div>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <img src={comisiones} className="modal-mc" />
        <div className="slide-caption">
          <h3>Comisiones</h3>
          <p>
            Arriba cobra el 1% para compras y ventas. Esto significa que si
            compras o vendes una criptomoneda, Arriba cobra una comisión del 1%
            del valor de la transacción, sin IVA.
          </p>
          <p>
            En Arriba no hay comisión por mantenimiento de cuenta, o para
            depositar y retirar. Tu dinero es tu dinero.
          </p>
        </div>
      </Modal>

      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <img src={retiros} className="modal-mc" />
        <div className="slide-caption">
          <h3>Retiros</h3>
          <p>
            Arriba cobra el 1% para compras y ventas. Esto significa que si
            compras o vendes una criptomoneda, Arriba cobra una comisión del 1%
            del valor de la transacción, sin IVA.
          </p>
          <p>
            En Arriba no hay comisión por mantenimiento de cuenta, o para
            depositar y retirar. Tu dinero es tu dinero.
          </p>
        </div>
      </Modal>

      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <img src={activos} className="modal-mc" />
        <div className="slide-caption">
          <h3>Activos</h3>
          <p>
            Arriba cobra el 1% para compras y ventas. Esto significa que si
            compras o vendes una criptomoneda, Arriba cobra una comisión del 1%
            del valor de la transacción, sin IVA.
          </p>
          <p>
            En Arriba no hay comisión por mantenimiento de cuenta, o para
            depositar y retirar. Tu dinero es tu dinero.
          </p>
        </div>
      </Modal>

      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <img src={invertir} className="modal-mc" />
        <div className="slide-caption">
          <h3>Invertir</h3>
          <p>
            Arriba cobra el 1% para compras y ventas. Esto significa que si
            compras o vendes una criptomoneda, Arriba cobra una comisión del 1%
            del valor de la transacción, sin IVA.
          </p>
          <p>
            En Arriba no hay comisión por mantenimiento de cuenta, o para
            depositar y retirar. Tu dinero es tu dinero.
          </p>
        </div>
      </Modal>

      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
        <img src={recompensas} className="modal-mc" />
        <div className="slide-caption">
          <h3>Recompensas</h3>
          <p>
            Arriba cobra el 1% para compras y ventas. Esto significa que si
            compras o vendes una criptomoneda, Arriba cobra una comisión del 1%
            del valor de la transacción, sin IVA.
          </p>
          <p>
            En Arriba no hay comisión por mantenimiento de cuenta, o para
            depositar y retirar. Tu dinero es tu dinero.
          </p>
        </div>
      </Modal>

      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <img src={tasas} className="modal-mc" />
        <div className="slide-caption">
          <h3>Tasas</h3>
          <p>
            Arriba cobra el 1% para compras y ventas. Esto significa que si
            compras o vendes una criptomoneda, Arriba cobra una comisión del 1%
            del valor de la transacción, sin IVA.
          </p>
          <p>
            En Arriba no hay comisión por mantenimiento de cuenta, o para
            depositar y retirar. Tu dinero es tu dinero.
          </p>
        </div>
      </Modal>
    </>
  );
}
