import React from "react";
import './AgregaContacto.css';
import {DirectorioContext} from'../Contex/DirectorioProvider';



function AgregaContacto() {

    const [setModal, guardarContacto]=React.useContext(DirectorioContext);
    const [contact,setcontact]=React.useState({
        nombre:'',
        correo:'',
        telefono:''
    })
    
    function onChangenombre(event) {
        let contactoTemporal=contact;
        contactoTemporal.nombre=event.target.value;
        setcontact(contactoTemporal);
    }
    function onChangecorreo(event) {
        let contactoTemporal=contact;
        contactoTemporal.correo=event.target.value;
        setcontact(contactoTemporal);
     }
    function onChangetelefono(event) { 
        let contactoTemporal=contact;
        contactoTemporal.telefono=event.target.value;
        setcontact(contactoTemporal);
    }

    function onClickbtnBorrar() { }
    function onClickbtnAgregar(event) {
        event.preventDefault();
        guardarContacto(contact);
        setModal(false);
     }

    return (
        <div>
            <form>
                <input typeof="nombre" placeholder="Nombre" onChange={onChangenombre}></input>
                <input typeof="correo" placeholder="Correo" onChange={onChangecorreo}></input>
                <input typeof="telefono" placeholder="Telefono" onChange={onChangetelefono}></input>
                <div>
                    <button className="btnBorrar" onClick={onClickbtnBorrar}>Borrar</button>
                    <button typeof="submit" onClick={onClickbtnAgregar}>Guardar</button>
                </div>
            </form>

        </div>
    )
}
export default AgregaContacto;