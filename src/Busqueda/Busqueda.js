import React from "react";
import './Busqueda.css';
import { DirectorioContext } from "../Contex/DirectorioProvider";

function Busqueda() {
    const {TextoBusqueda, setTextoBusqueda} = React.useContext(DirectorioContext);
 
    function onBusquedaChange(event) {
        setTextoBusqueda(event.target.value);
    }
    return (
        <React.Fragment>
            <input onChange={onBusquedaChange} value={TextoBusqueda}></input>
        </React.Fragment>
    );
}
export default Busqueda; 