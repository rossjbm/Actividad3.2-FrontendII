const mongoose = require('mongoose');

const usuariosShema = new mongoose.Schema(
    {
        id: mongoose.Schema.ObjectId,
        rol:{
            type: String
        },
        nombre:{
            type: String
        },
        apellido:{
            type: String
        },
        contrasena:{
            type: String
        },
        cedula:{
            type: String
        },
        correo:{
            type: String
        },
    },
    {
        versionKey:false
    }
)

module.exports = mongoose.model('usuarios', usuariosShema, 'usuarios')