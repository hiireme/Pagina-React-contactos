import React from 'react';
import './App.css';
import Busqueda from './Busqueda/Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import { DirectorioContext, DirectorioProvider } from './Contex/DirectorioProvider';

function App() {

  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
          ({
            contactosFiltrados,
            borrarContacto,
            contadorContactos,
            Modal,
            setModal
          }) => (
            <React.Fragment>
              <div className='contenedor1'>
                <h1 className='directorio'>DIRECTORIO [{contadorContactos}]</h1>
                <Busqueda />
                <button className='btnAgregarContacto' onClick={() => { setModal(true) }}>Agregar Contacto</button>
              </div>
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
              {Modal && <AgregaContacto />}
            </React.Fragment>
          )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;