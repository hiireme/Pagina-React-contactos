import React from "react";
import './AgregaContacto.css';
import {DirectorioContext} from'../Contex/DirectorioProvider';



function AgregaContacto() {

    const {setModal, guardarContacto}=React.useContext(DirectorioContext);
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

    function onClickbtnBorrar() { 
        setModal(false);
    }
    
    function onClickbtnAgregar(event) {
        event.preventDefault();
        guardarContacto(contact);
        setModal(false);
     }

    return (
        <div className="modal">
            <form className="modal_container">
                <input typeof="nombre" placeholder="Nombre" onChange={onChangenombre}></input>
                <input typeof="correo" placeholder="Correo" onChange={onChangecorreo}></input>
                <input typeof="telefono" placeholder="Telefono" onChange={onChangetelefono}></input>
                <div>
                    <button className="Borrar" onClick={onClickbtnBorrar}>Borrar</button>
                    <button className="submit" onClick={onClickbtnAgregar}>Guardar</button>
                </div>
            </form>

        </div>
    )
}
export default AgregaContacto;