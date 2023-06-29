import React, {useEffect, useRef} from 'react';
import {gsap, Power4} from 'gsap';

import Logo from "./Logo";
import HeaderSocials from "./HeaderSocials";
import Navbar from "./Navbar";
import Link from "./Link";
import Copyright from './Copyright';
import video from '../videos/fondohero.mp4';


const Header = () => {
    const timeline = gsap.timeline({defaults: {opacity: 0, duration: .6, y: 50, ease: Power4.easeOut}});

    useEffect(() => {
        const brand = document.querySelector('.brand');
        const text = document.querySelector('.header__top p');
        const title = document.querySelector('.header__top h1');
        const button = document.querySelector('.header__top .buttonContent');
        const navbar = document.querySelectorAll('.navbar li');
        const socials = document.querySelectorAll('.socials li');
        const copyright = document.querySelector('.copyright');
        timeline
        .from(brand, { stagger: 0.3 })
        .from(text, { stagger: 0.3 }, "-=.5")
        .from(title, { stagger: 0.3 }, "-=.5")
        .from(button, { stagger: 0.3 }, "-=.5")
        .from(navbar, { y: 5, stagger: 0.3 }, "-=.5")
        .from(socials, { y: 30,rotation: 360,  stagger: 0.3 }, "-=.5")
        .from(copyright, { y: 0, x: 30, stagger: 0.3 }, "-=1")
    }, [])
    
    return (

                <>
                <section className="header">
                    <div className="container">
                        <Logo />
                        <div className="header__top">
                            <p>Descarga la app</p>
                            <h1>Empieza a <br />ganar.</h1>
                            <div className="buttonContent">
                                <Link copy="Descargar Arriba" link="/" className="button-arrow-up"/>
                            </div>
                        </div>
                        <div className="header__bottom">
                            <Navbar/>
                            <HeaderSocials />
                        </div>
                        <Copyright copy="2022 @ arriba" className="copyright" />
                        <video autoPlay muted loop id="DispositivosVideo">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </section>
                </>
            )
        }
export default Header;