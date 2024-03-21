

export async function ListarServicio() {
    return fetch(`http://localhost:3000/servicios`, {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(response => {
        if (response.error) {
            console.log('error', response.error);
            throw response.error
        }else{
            console.log('exito', response)
            return response;
        } 
    })
    .catch ((error) => {
        throw ("Error:", error)
    }) 
}