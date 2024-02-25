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
      <button name="btn1" onClick={buttonClickHandler}>Show message</button>
      <Header appName="The Chilas" href= 'http://www.google.com' alt ='Ir a The Chilas' showLink={showLink}> </Header>  
      <Body></Body>
      <Footer></Footer>
      
  </Fragment>

  )
};

