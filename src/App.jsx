import React, {Fragment, useState} from 'react';    //Incluir siempre en el componente por las librerias.

import { 
  Header,
  Body,
  Footer
} from './components';

export const App = () => {

const [showLink, setShowLink] = useState(false);
const buttonClickHandler = (e) => {
  setShowLink(!showLink)
}


  return(
    
    <Fragment>
      <button name="btn1" onClick={buttonClickHandler}>Go to Otterlicious</button>
      <Header appName="Otterlicious" href= 'http://www.otterlicious.com' alt ='Link to "Otterlicious web page"' showLink={showLink}> </Header>  
      <Body></Body>
      <Footer></Footer>
      
  </Fragment>

  )
};

