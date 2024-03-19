export async function ListarReviews() {
    return fetch(`http://localhost:3000/comentarios`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                console.log('error', response.error);
                throw response.error
            } else {
                return response.comentarios;
            }
        })
        .catch((error) => {
            throw ("Error:", error)
        })
}

export async function agregarReview(nombre, review) {
    fetch(`http://localhost:3000/comentarios`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usuario: review.nombre,
            comentario: review.comentario,
            calificacion: review.calificacion,
            habitacion: nombre
        })
    })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                console.log('error', response.error);
                throw response.error
            } else {
                return response.comentario;
            }
        })
        .catch((error) => {
            throw ("Error:", error)
        })
}