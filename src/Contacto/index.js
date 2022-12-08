import React from "react";
import './Contacto.css';


function Contacto(props) {
    function borrar() {
        console.log("le diste click a borrar");
        props.borrarContacto();
    }
    return (
        <div className="caja1">
            <div className="contenedorContacto">
                <p>{props.nombre}</p>
                <p>{props.telefono}</p>
                <p>{props.correo}</p>
                <button className="btnBorrar" onClick={borrar}>Borrar</button>
            </div>
        </div>
    )
}
export default Contacto;