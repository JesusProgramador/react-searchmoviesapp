import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

  /*   const handleAdd = () => {
        setCategories([...categories, 'One Piece']);//forma de agregar o modificar un arreglo
        
        setCategories( categories => [...categories, 'One Pice']);
    } */

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr/>

           <ul>
               {//le envia lo que hay en el arreglo, luego hace consulta a la api con los elementos coincidentes dentro del array
               categories.map(category => (
                   <GiftGrid 
                        key={category}     
                        category={category} 
                    />
               ))
               }
           </ul>
        </>
    )
}
