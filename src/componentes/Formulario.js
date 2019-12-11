import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = ( props ) => {
    // Aqui es donde se escribe todo el Javascript
    // destruturin en valor y funcion para interactuar y guardar el state que usamos
    // Cantidad: tiene el valor que sea el state
    // guardarCantidad funcion que reescribe y guardar el state
    // React cuenta con eventos mediantes los cuales escucha los cambios onChanege, onCleck onSelect
    // haciendo destructuring de los datos
    const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props

    // state más local
    const [error, guardarError] = useState(false)

    // función que valida el formulario cuando el usuario hace submit
    const calcularPrestamo = e => {
        e.preventDefault();

        // Validar
        if(cantidad === 0 || plazo === ""){
            // Si hay un mensaje de error 
            // mustra un mensaje de error
            guardarError(true);
            return;
        }
        // eliminar el error Previo
        guardarError(false);

         // Habilitar el Spinner
        guardarCargando(true);

        setTimeout( () => {
             // realizar cotización
            // aqui se declara una variable "total" ya que estamos retornando el total del helpers
            const total = calcularTotal(cantidad, plazo);

            // una vez calculado guardamos el total, guardarTotal
            guardarTotal(total);

            // Desahabilitar el Spinner
            guardarCargando(false);

        }, 3000);
    }

    return (  
        <Fragment>
            <form onSubmit={ calcularPrestamo }>
            {/* Esto es para comprobar si funciona correctamete
            {cantidad} -
            {plazo} meses */}
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ e => guardarCantidad( parseInt(e.target.value) ) } // funcion que maneja cambios
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => guardarPlazo( parseInt(e.target.value) ) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
    
            {(error) ?  <p className="error">Todo los campos son obligatorios</p> : null }

    </Fragment>
    );
}
export default Formulario;