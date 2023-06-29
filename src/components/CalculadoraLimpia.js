import React, { Children, useState } from 'react';
import Select from 'react-select';
import chile from '../images/chile.svg';
import colombia from '../images/chile.svg';
import bitcoin from '../images/bitcoin.svg';
import Link from './Link';

const data = [
    {
      value: 'Chile',
      text: 'CHI',
      icon: <img src={chile} className="icon-calc" height="19px" width="19px"/>
      
    },
    {
      value: 'Colombia',
      text: 'COL',
      icon: <img src={colombia} className="icon-calc" height="19px" width="19px"/>
    }
];

const bitcoins = [
    {
      value: 'Bitcoin',
      text: 'BIT',
      icon: <img src={bitcoin} className="icon-calc" height="19px" width="19px"/>
      
    },
    {
      value: 'Etherium',
      text: 'ETH',
      icon: <img src={bitcoin} className="icon-calc" height="19px" width="19px"/>
    }
];
const anios = [
    {
        value: '1',
        text: '1 año',
      },
    {
      value: '5',
      text: '5 años',
    },
    {
      value: '10',
      text: '10 años',
    }
];

const Calculadora = () =>{

        const [selectedOption, setSelectedOption] = useState({ text: "CHI", value: "Chile", icon: <img src={chile} className="icon-calc" height="19px" width="19px"/> });
        // handle onChange event of the dropdown
        const handleChange = e => {
            setSelectedOption(e);
        }
        const [selectedOptionBitcoin, setselectedOptionBitcoin] = useState({ value: 'Bitcoin', text: 'BIT', icon: <img src={bitcoin} className="icon-calc" height="19px" width="19px"/> });
        // handle onChange event of the dropdown
        const handleChangeBitcoin = e => {
            setselectedOptionBitcoin(e);
        }
        const [selectedOptionAnios, setselectedOptionAnios] = useState(null);
        // handle onChange event of the dropdown
        const handleChangeAnios = e => {
            setselectedOptionAnios(e);
        }
        const [monto, setMonto] = useState("1000");
  
        return (
        <section className="calculadora">

            <div className="calculadora__left">

                <span className="calculadora__label">¿Cuánto quieres invertir?</span>
                <div className="calculadora__grid">
                    <div className="calculadora__grid-col">
                        <Select
              
                            defaultValue={{ text: "CHI", value: "Chile" }}
                            value={selectedOption}
                            options={data}
                            onChange={handleChange}
                            getOptionLabel={e => (
                            <div style={{ display: 'flex', alignItems : 'center' }}>
                                {e.icon}
                                <span style={{ marginLeft: 5 }}>{e.text}</span>
                            </div>
                            )}
                        />
                    </div>
                    <div className="calculadora__grid-col">
                    <input
                        type="number" 
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        // value="1000"
                        />
                    </div>
                </div>
                <span className="calculadora__label">¿Cuánto quieres invertir?</span>

                <Select
                    placeholder="Seleccionar moneda"
                    value={selectedOptionBitcoin}
                    options={bitcoins}
                    onChange={handleChangeBitcoin}
                    getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems : 'center' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                    )}
                />

                <span className='calculadora__label'>¿Por cuánto tiempo?</span>
                <Select
                    placeholder="Seleccionar años"
                    value={selectedOptionAnios}
                    options={anios}
                    onChange={handleChangeAnios}
                    getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems : 'center' }}>
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                    )}
                />
            </div>

            <div className="calculadora__right">
                <div>
                    <small>Ganancias</small>
                    <h4>100.000</h4>
                </div>
                <div>
                    <small>Rentabilidad anual</small>
                    <h5>10%</h5>
                </div>
                <p className="disclaimer">Calculadora para fines comparativos de referencia.</p>
                <Link copy="Descargar Arriba" link="/" className="button-arrow-up"/>
            </div>

        </section>
   )}
export default Calculadora;