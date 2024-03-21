

export async function EditOfertas(documento, id) {
    const formData = new FormData();
    Object.keys(documento).forEach(key => {
        formData.append(key, documento[key]);
    });

    return fetch(`http://localhost:3000/ofertas/${id}`, {
        method: 'PUT',
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
        console.log("Error:", error)
        throw error
    }) 
}