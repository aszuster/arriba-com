import Marquee from "react-easy-marquee";

const Dinero = ({text}) => {

  return (
        <>
        <Marquee duration={300000} width="100%">
            <h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2>
        </Marquee>
        <div className="secondMarquee">
            <Marquee duration={300000} reverse={true} width="100%">
                <h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2>
            </Marquee>
        </div>
        </>
  );
};

export default Dinero;