//es el fichero donde se realizara la peticion http cada vez que se ingrese una nueva categoria en el input

//los customs hooks se utilizan como functional components
import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

     useEffect(() => {

        getGifs( category )
            .then( imgs => {

                    setState({
                        data: imgs,
                        loading: false
                    });
            } )
        
    }, [ category ])

    return state;
}