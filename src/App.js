import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {
  // Definir el State de los diversos componentes
  const [cantidad, guardarCantidad] = useState(0); // Hay que pasarlos como props
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0); // es importante tener el state aqui ya que podemos acceder el valor en este componente y pasarlo a otros componentes
  const [cargando,guardarCargando] = useState(false);

  // Codigo standar de Js
  let componente;

  if(cargando){
    componente = <Spinner />
  }else if(total === 0){
    componente = <Mensaje />
  }else{
    componente = <Resultado //Pasar via props
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                />
  }
  return (
    // Necesitamos un elemento que contenga los otros elementos
    // componente padre pasa los props que es un objeto a los componentes hijos
    <Fragment>
      <Header titulo="Cotizador de prestamos"/>
      <div className="container">
        <Formulario 
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
// sudo chmod -R 777 *