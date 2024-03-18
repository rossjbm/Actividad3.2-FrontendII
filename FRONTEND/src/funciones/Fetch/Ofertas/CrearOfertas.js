

export async function CrearOfertas(documento) {
    const formData = new FormData();
    Object.keys(documento).forEach(key => {
        // console.log('soy key', key)
        formData.append(key, documento[key]);
    });

    return fetch(`http://localhost:3000/ofertas`, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(response => {
        if (response.error) {
            console.log('error', response.error);
            throw response.error
        } else {
            console.log('exito', response)
            return response;
        } 
    })
    .catch ((error) => {
        throw ("Error:", error)
    }) 
}