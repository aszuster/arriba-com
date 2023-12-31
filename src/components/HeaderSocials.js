import React from 'react';

const Header = () =>(
    <>
        <ul className="socials">
            <li>
                <a href="#">
                    <svg className="iconInstagram" x="0px" y="0px" viewBox="0 0 20 20">
                        <path class="st0" d="M10,13.1c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1c-1.7,0-3.1,1.4-3.1,3.1C6.9,11.7,8.3,13.1,10,13.1z"/>
                        <path class="st1" d="M13.4,2.8H6.6c-2.1,0-3.8,1.7-3.8,3.8v6.9c0,2.1,1.7,3.8,3.8,3.8h6.9c2.1,0,3.8-1.7,3.8-3.8V6.6C17.2,4.5,15.5,2.8,13.4,2.8z"/>
                        <path d="M14.1,6.9c0.5,0,0.9-0.4,0.9-0.9S14.6,5,14.1,5s-0.9,0.4-0.9,0.9S13.5,6.9,14.1,6.9z"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" className="facebook">
                    <svg x="0px" y="0px" viewBox="0 0 20 20">
                        <path class="st0" d="M10,17.5c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5c-4.1,0-7.5,3.4-7.5,7.5C2.5,14.1,5.9,17.5,10,17.5z"/>
                        <path class="st0" d="M13.1,6.9h-1.2c-0.2,0-0.5,0-0.7,0.1c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.4-0.4,0.6C10,8.3,10,8.5,10,8.8 v8.7"/>
                        <path class="st0" d="M7.5,11.2h5"/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" className="iconTwitter">
                    <svg x="0px" y="0px" viewBox="0 0 20 20" >
                        <path class="st0" d="M10,6.9c0-1.7,1.4-3.1,3.2-3.1c0.6,0,1.2,0.2,1.7,0.5c0.5,0.3,0.9,0.8,1.1,1.4h2.8l-2.5,2.5
                        c-0.2,2.5-1.3,4.9-3.1,6.6s-4.3,2.7-6.8,2.7c-2.5,0-3.1-0.9-3.1-0.9s2.5-0.9,3.8-2.8c0,0-5-2.5-3.8-9.4c0,0,3.1,3.1,6.9,3.8V6.9z"/>
                    </svg>
                </a>
            </li>
        </ul>  
    </>
)
export default Header;