import React from 'react';
import './App.css';
import Busqueda from './Busqueda/Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
function App() {

  let Contactos=[
    {
      nombre:"Regina",
      telefono:"3221088196",
      correo:"ti1801014@academica.utb.edu.mx"
    },
    {
      nombre:"Jhosep",
      telefono:"3112468469",
      correo:"jhosep@mail.com"
    },
    {
      nombre:"Edgar",
      telefono:"322111111",
      correo:"edgar@mail.com"
    }
  ]

  let [textoBusqueda, setTextoBusqueda] = React.useState('');
  let contactosFiltrados=[];

    if(textoBusqueda.length>0){
      let textoBusquedaLowerCase=textoBusqueda.toLowerCase();
      contactosFiltrados=Contactos.filter((contacto)=>{
        return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
      })
    }
    else{
      contactosFiltrados=Contactos;
    }

  return (
    <React.Fragment>
      <h1>DIRECTORIO</h1>
      <Busqueda textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda}/>
      <ListaContactos>
        {
          contactosFiltrados.map((contacto)=>{
            return(
              <Contacto
                nombre={contacto.nombre}
                telefono={contacto.telefono}
                correo={contacto.correo}
              />
            )
          })
        }
        
      </ListaContactos>
      <AgregaContacto/>
    </React.Fragment>
  );
}

export default App;