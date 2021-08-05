


export const getGifs = async( category ) =>{

    //encodeURI es un metodo js que elimina espacios vacios. y se usa la interpolacion para pasar directamente lo que se recibe en category a la peticion http
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=b0nkunM3yZbSM7v0IzGledc7UPxxufmt`
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}