const mongoose = require('mongoose');

const ofertasSchema = new mongoose.Schema( 
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
        },
        fecha_expiracion: {
            type: Date
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('ofertas', ofertasSchema, 'ofertas') 
