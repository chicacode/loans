import React from 'react';
// un componente siempre es una function
// Aplicando destructuring al objeto de props
// Se le puede dar por implicito el return y quitamos el return y los parentesis
// Si se da por implicito el return no se podra escribir codigo seguro de Javascript entre el parentesis y las llaves
const Header = ({titulo}) => (   
    <h1>{ titulo }</h1>
);


export default Header;
