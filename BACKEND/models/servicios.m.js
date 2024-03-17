const mongoose = require('mongoose'); //requerimos libreria de mongo

const serviciosSchema = new mongoose.Schema( 
    {
        id: mongoose.Schema.ObjectId,
        titulo: {
            type: String
        },
        descripcion: {
            type: String
        },
        imagen: {
            type: String
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('servicios', serviciosSchema, 'servicios') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection
