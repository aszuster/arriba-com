import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import HazLaPrueba from "./HazLaPrueba";
import MundoCrypto from "./MundoCrypto";
import Footer from "./Footer";
import Main from "./Main";
import Preloader from './Preloader';

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.scrollTo(0, document.body.scrollHeight)
    }, 2000)
      
  }, []); 

  return (
  <>
    {
      loading ? (

        <Preloader />
      
      ) : (
      
      <>
        
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Arriba.com</title>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"
              />
            </Helmet>
            <Header />
            <MundoCrypto />
            <HazLaPrueba />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>

      </>
      ) 
    
    }
  </>
    
  );
};

export default App;
