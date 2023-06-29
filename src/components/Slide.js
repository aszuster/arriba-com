import React from 'react';
import eye from '../images/eye.svg';


function Slide({step,image,title,copy,link}) {
    return <>
            <article className="slide__card">
                <small>{step}</small>
                <img src={image} className="mc" />
                <h3>{title}</h3>
                <p>{copy}</p>
                <button onClick={link} className="slide__card-eye"><img src={eye} /></button>
            </article>
    </>

}

Slide.defaultProps={
    step: "0",
    image: "./images/mc-activos.png",
    title: "title",
    link: "#"
}

export default Slide;