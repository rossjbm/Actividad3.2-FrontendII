export async function accederL(datos) {
    const json = JSON.stringify(datos)
    console.log(json);
    return fetch(`http://localhost:3000/acceder/ingresar`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:json
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        return response
    })
}
export async function accederS(datos) {
    const json = JSON.stringify(datos)
    console.log(json);
    return fetch(`http://localhost:3000/acceder/registrar`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:json
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        return response
    })
}