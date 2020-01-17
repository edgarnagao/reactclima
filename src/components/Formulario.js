import React, {useState} from 'react';


const Formulario = ({busqueda,guardarBusqueda, guardarConsultar}) => {

    const [error, guardarError] = useState(false);

    const{ciudad, pais} = busqueda;

    // funcioan que colocla los elementos en el stata
    const handleChange = e => {
        // Actualizar state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Funcion para cambiar 
    const handleSubmit = e => {
        // Mandar la consulta del api
        e.preventDefault();

        // Valdiar
        if(ciudad.trim()==='' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        // Mandarlo 
        guardarConsultar(true);
    }
    
    //Commit
    return(
        <form onSubmit={handleSubmit}>
            {error ? <p className="red darken-4">Todos los campos son obligatorios</p>: null}  
            <div className="input-field input col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">-- Selecciona un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            
            
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div> 
            
        </form>
    );
}

 
export default Formulario;