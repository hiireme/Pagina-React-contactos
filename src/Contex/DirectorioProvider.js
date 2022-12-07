import React from "react";

const DirectorioContext = React.createContext();
function DirectorioProvider(props) {

    let Contactos, contadorContactos;

    if (!localStorage.Contactos) {
        localStorage.setItem("contactos", JSON.stringify([]));
        Contactos = [];
    }
    else {
        Contactos = JSON.parse(localStorage.Contactos);
    }

    let [textoBusqueda, setTextoBusqueda] = React.useState('');
    let [ContactosState, setContactosState] = React.useState(Contactos)
    let contactosFiltrados = [];
    let [Modal, setModal]= React.useState(false);

    function guardarContacto(contacto) {
        let contactosTemporal=[...ContactosState];
        contactosTemporal.push(contacto);
        localStorage.setItem("contactos", JSON.stringify(contactosTemporal));
        setContactosState(contactosTemporal);
    }

    function borrarContacto(name) {

        let indice = ContactosState.findIndex((contacto) => {
            return contacto.nombre == name;
        });
        let contactosTemporal = [...ContactosState];
        contactosTemporal.splice(indice, 1);
        localStorage.setItem("Contactos", JSON.stringify(contactosTemporal));
        setContactosState(contactosTemporal);
        console.log(indice);

    }

    if (textoBusqueda.length > 0) {
        let textoBusquedaLowerCase = textoBusqueda.toLowerCase();
        contactosFiltrados = ContactosState.filter((contacto) => {
            return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
        })
    }
    else {
        contactosFiltrados = ContactosState;
    }

    contadorContactos=contactosFiltrados.length;
    
    return (
        <DirectorioContext.Provider
            value={{
                textoBusqueda,
                setTextoBusqueda,
                contactosFiltrados,
                ContactosState,
                setContactosState,
                borrarContacto,
                contadorContactos,
                Modal,
                setModal,
                guardarContacto
            }}>
            {props.children}
        </DirectorioContext.Provider>
    )

}

export { DirectorioContext, DirectorioProvider };