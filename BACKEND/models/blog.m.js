const mongoose = require('mongoose'); //requerimos libreria de mongo

const blogSchema = new mongoose.Schema( 
    {
        _id: {
            type: String  
        },
        titulo: {
            type: String
        },
        descripcion: {
            type: String
        },
        imagen: {
            type: String
        },
        subtitulo1: {
            type: String
        },
        subdescripcion1: {
            type: String
        },
        subtitulo2: {
            type: String
        },
        subdescripcion2: {
            type: String
        },
        subtitulo3: {
            type: String
        },
        subdescripcion3: {
            type: String
        },
        subtitulo4: {
            type: String
        },
        subdescripcion4: {
            type: String
        },
        subtitulo5: {
            type: String
        },
        subdescripcion5: {
            type: String
        },
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('blog', blogSchema, 'blog') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection
