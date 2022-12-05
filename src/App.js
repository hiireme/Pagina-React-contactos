import React from 'react';
import './App.css';
import Busqueda from './Busqueda/Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import { DirectorioContext, DirectorioProvider } from './Contex/DirectorioProvider';

function App() {
  let modal = false;
  
  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
          ({
            contactosFiltrados,
            borrarContacto,
            contadorContactos,
            modal,
            setModal
          }) => (
            <React.Fragment>
              <h1>DIRECTORIO [{contadorContactos}]</h1>
              <Busqueda />
              <button onClick={()=>{setModal(true)}}>Agregar Contacto</button>
              <ListaContactos>
                {
                  contactosFiltrados.map((contacto) => {
                    return (
                      <Contacto
                        nombre={contacto.nombre}
                        telefono={contacto.telefono}
                        correo={contacto.correo}
                        borrarContacto={() => { borrarContacto(contacto.nombre) }}
                      />
                    )
                  })
                }
              </ListaContactos>
              {modal && <AgregaContacto />}
            </React.Fragment>
          )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;