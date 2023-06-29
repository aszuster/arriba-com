import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';

import FooterModal from './FooterModal';
import Logo from './Logo';

import hazscroll from '../images/haz-scroll.svg';
import footer1 from '../images/footer1.png';
import footer2 from '../images/footer2.png';
import footer3 from '../images/footer3.png';

const Footer = () => {

    const [show,setShow]= useState(false);
    const tween = useRef(null);
    const overlay = useRef(null);
    const navbar = useRef(null);  

    useEffect(() => {
      if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [show]);

    useEffect(() => {
      tween.current = gsap.timeline()
      .from(overlay.current, {
          y: 1000,
          opacity: 0,
        }, 0.25)
      .from(navbar.current, {
          y: 1000,
          opacity: 0
      }, 0.5)
      return () => {
        tween.current.kill();
      };
    }, []);
    
    useEffect(() => {
      if (show) {
        tween.current.play();
      } else {
        tween.current.reverse();
      }
    }, [show]);



    return (
    <>
        <div ref={navbar} className="navbarContent" ><FooterModal /></div>
      
        <footer className="footer" id="footer">
            <img src={footer1} className="imgFooter imgFooter1"/>
            <img src={footer2} className="imgFooter imgFooter2"/>
            <img src={footer3} className="imgFooter imgFooter3"/> 
            
            <div className="container">
                <img src={hazscroll} className="hazscroll" />
                <p>Animate a ser parte <br />
                del mundo crypto</p>
                <h2>Fácil y rápido</h2>
                <div>
                    <Logo />
                </div>
            </div>
            <div className="ToggleNavContent">
                <button className={`ToggleNav ${ show ? "toggled" : ""}`} onClick={() => setShow(!show)}>
                    <span></span><span></span><span></span>
                </button>
            </div>
            <div ref={overlay} className="FooterOverlay"></div>
        </footer>
        
        

    </>
)}

export default Footer;