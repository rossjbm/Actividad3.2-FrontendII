const mongoose = require('mongoose'); //requerimos libreria de mongo

const comentariosSchema = new mongoose.Schema( 
    {
        id: mongoose.Schema.ObjectId,
        usuario: {
            type: String
        },
        habitacion: {
            type: String
        },
        comentario: {
            type: String
        },
        calificacion: {
            type: Number
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('comentarios', comentariosSchema, 'comentarios') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection
