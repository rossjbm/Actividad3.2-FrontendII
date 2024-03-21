

export async function BorrarOfertas(id) {
    return fetch(`http://localhost:3000/ofertas/${id}`, {
        method: 'DELETE',
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