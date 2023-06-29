import React, { Children, useState } from "react";
import Select, { components } from "react-select";
import Link from "./Link";


const years = [
  {
    value: "12",
    text: "1 año",
  },
  {
    value: "5",
    text: "5 años",
  },
  {
    value: "10",
    text: "10 años",
  },
];

const Calculadora = () => {


  const replaceDotWithComma = (str) => {
    return str.replace(/\./g, ",");
  };

  const monedasTotal = require("../Monedas.json");
  const coinsTotal = require("../Coins.json");
  const [number, setNumber] = useState("1000");


  const [selectedOption, setSelectedOption] = useState({
    text: "CHI",
    value: "Chile1",
    icon: "../images/chile.svg",
  });

  // handle onChange event of the dropdown / Moneda
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const [selectedOptionBitcoin, setselectedOptionBitcoin] = useState({
    value: "Bitcoin",
    text: "BTC",
    rate: "2",
    icon: "images/bitcoin.svg",
  });


  const handleChangeBitcoin = (e) => {
    setselectedOptionBitcoin(e);
    setCryptoRate(e.rate);
  };

  // handle onChange event of the dropdown / Crytpo

  const [cryptoRate, setCryptoRate] = useState(2);
  


  // SELECCIONAR AÑOS

  const [initialOptionYears, setinitialOptionYears] = useState({
    value: "1",
    text: "1 año",
  });

  const [overYears, setoverYears] = useState(1);

  const handleChangeYears = (e) => {
    setinitialOptionYears(e);
    setoverYears(e.value);
  };

  // CALCULO

  const realRate = 1 + cryptoRate / 100;

  const profit = parseFloat(number * realRate ** overYears - number).toFixed(2);

  console.log("años " + overYears);
  console.log("rate " + realRate);
  console.log("input " + number);

  console.log("profit " + profit);

  return (
    <section className="calculadora">
      <div className="calculadora__left">
        <span className="calculadora__label">¿Cuánto quieres invertir?</span>
        <div className="calculadora__grid">
          <div className="calculadora__grid-col">
            <Select
              // defaultValue={{ text: "CHI", value: "Chile" }}
              value={selectedOption}
              // options={data}
              options={monedasTotal.moneda}
              className='react-select-container'
              classNamePrefix="arriba"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#e9e9e9',
                  primary: 'black',
                  primary50: '#e9e9e9',
                },
              })}
              onChange={handleChange}
              getOptionLabel={(e) => (
                // <div style={{ display: "flex", alignItems: "center" }}>
                //   {e.icon}
                //   <span style={{ marginLeft: 5 }}>{e.text}</span>
                // </div>
                <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={e.icon}
                className="icon-calc"
                height="19px"
                width="19px"
              />

              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
              )}
            />
          </div>
          <div className="calculadora__grid-col">
            <input
              min={0}
              oninput="validity.valid||(value='');"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <span className="calculadora__label">¿Con qué moneda?</span>

        <Select
          placeholder="Seleccionar moneda"
          value={selectedOptionBitcoin}
          options={coinsTotal.coins}
          className='react-select-container'
          classNamePrefix="arriba"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e9e9e9',
              primary: 'black',
              primary50: '#e9e9e9',
            },
          })}
          onChange={handleChangeBitcoin}
          styles={{
            dropdownIndicator: (base, state) => ({
              ...base,
              transition: "all .2s ease",
              transform: state.selectProps.menuIsOpen
                ? "rotateZ(180deg) translate(0px, 7px);"
                : null,
            }),
          }}

          
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={e.icon}
                className="icon-calc"
                height="19px"
                width="19px"
              />

              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />

        <span className="calculadora__label">¿Por cuánto tiempo?</span>
        <Select
          placeholder="Seleccionar años"
          value={initialOptionYears}
          className='react-select-container'
          classNamePrefix="arriba"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e9e9e9',
              primary: 'black',
              primary50: '#e9e9e9',
            },
          })}
          options={years}
          onChange={handleChangeYears}
          styles={{
            dropdownIndicator: (base, state) => ({
              ...base,
              transition: "all .2s ease",
              transform: state.selectProps.menuIsOpen
                ? "rotateZ(180deg) translate(0px, 7px);"
                : null,
            }),
          }}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>

      <div className="calculadora__right">
        <div>
          <small>Ganancias</small>
          <h4>{replaceDotWithComma(profit)}</h4>
        </div>
        <div>
          <small>Rentabilidad anual</small>
          <h5>{cryptoRate}%</h5>
        </div>
        <p className="disclaimer">
          Calculadora para fines comparativos de referencia.
        </p>
        <Link copy="Descargar Arriba" link="/" className="button-arrow-up" />
      </div>
    </section>
  );
};
export default Calculadora;
