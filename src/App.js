import React, {useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
      ciudad:'',
      pais:'',
  });
   
  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(()=>{
    const consultarAPI = async () => {
      if (consultar){
      
        const appId = 'cebde9c7ef0588422514d0d9ed2a2ecf';
    
        const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appiid=${appId}`;
    
        const respuesta = await fetch(url);
    
        const resultado = await respuesta.json();
  
      }
    }
    
    consultarAPI();
  },[consultar]);



  return (


   <div className="App">
     <Header
      titulo='Clima React App'
     />
     <div className="contenedor-form">
       <div className='container'>
         <div className="row">
           <div className="col s12 m6">
            <Formulario/>
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}

           </div>
         </div>
       </div>
     </div>
   </div>
  );
}

export default App;
