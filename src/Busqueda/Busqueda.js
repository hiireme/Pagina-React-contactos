import React from "react";//referencia a la libreria de react
import './Busqueda.css';

function Busqueda(props) { //se declara la funcion y el nombre del archivo
 
    function onBusquedaChange(event) {
        props.setTextoBusqueda(event.target.value);
    }
    return ( //esto es lo que se muestra en la pagina web
        <React.Fragment>
            <input onChange={onBusquedaChange}></input>
        </React.Fragment>
    );
}
export default Busqueda; //