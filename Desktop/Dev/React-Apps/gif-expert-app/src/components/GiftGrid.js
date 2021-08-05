import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({category}) => {
    //Cuando el usuario ingrese una nueva busqueda en el input se llamara al hook FetchGifs para realizar la peticion y renderizar los nuevos datos en la pagina
    const{ data:images, loading } = useFetchGifs( category );

    return (
        
        <>

        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="card-grid">
            
                {
                    //renderiza en pantalla cada titulo obtenido en la peticion
                    images.map( img  => (
                        <GifGridItem 
                            key= { img.id }
                            {...img} 
                            />
                    ))

                }
            
        </div>

        </>
    )
}

