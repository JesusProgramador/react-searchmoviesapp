import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {//Lo que sea que se envie desde el fichero padre es lo que recibira aca desestructurado

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) =>{
        //renderizada automaticamente a medida que se va ingresando valores en el input
        setInputValue(event.target.value);
    }
    //el inputValue siempre va a ser el ultimo valor actualizado del que el usuario escribio

    const handleSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length > 2) {//el trim elimina posibles espacios en blanco
        //recibo el arreglo desde el elemento padre y le agrego el valor actual del input al presionar enter
        setCategories( categories => [inputValue, ...categories]);//primero se muestra lo ultimo ingresado y luego el resto del array
        setInputValue('');//limpia el input y lo deja vacio
        }
        
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}//el inputValue siempre va a ser el ultimo valor actualizado del que el usuario escribio
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}