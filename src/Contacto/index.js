import React from "react";
import './Contacto.css';


function Contacto(props) {
    function borrar() {
        console.log("le diste click a borrar");
        props.borrarContacto();
    }
    return (
        <div>
            <p>{props.nombre}</p>
            <p>{props.telefono}</p>
            <p>{props.correo}</p>
            <button onClick={borrar}>Borrar</button>
        </div>
    )
}
export default Contacto;