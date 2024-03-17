const ofertasModel = require("../models/ofertas.m")
const { v4 : uuidv4 } = require("uuid");

class ofertasControllers {
    async listar(req, res, next) { 
        try {
            const data = await ofertasModel.find();
            if (data.length > 0) {
                return res.status('200').json({"habitaciones": data, "mensaje": "Se han listado con éxito las habitaciones"})
            }
            return res.status('200').json({"mensaje": "No hay habitaciones disponibles"}) 
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async crear(req, res, next) { 
        try {
            const oferta = req.body
            const errorIguales = await ofertasModel.find({titulo: oferta.titulo})
            if (errorIguales.length > 0) {
                return res.status(400).json({"error": 'Ya existe una oferta con ese titulo'})
            }
            const ofertaCreada = await ofertasModel.create(oferta)
            if (ofertaCreada) {
                return res.status(201).json({"oferta": ofertaCreada, "mensaje": "oferta creada exitosamente"})
            }
            return res.status(404).json({"error": "Error inesperado en la petición"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            return res.status('404').json({"error":error}) //estado
        }
    }

    async listarUna(req, res, next) { 
        try {
            const id = req.params.id
            const oferta = await ofertasModel.findById(id);
            if (oferta) {
                return res.status('200').json({"oferta": oferta, "mensaje": "Se ha encontrado con exito la oferta"})
            }
            return res.status('400').json({"mensaje": "No Existe esa oferta"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async editar(req, res, next) { 
        try {
            const id = req.params.id
            const ofertaEditar = req.body
            const ofertaVerificacion = await ofertasModel.findById(id);
            if (!ofertaVerificacion) {
                return res.status('400').json({"mensaje": "No Existe esa oferta"})
            }
            const errorIguales = await ofertasModel.find({"titulo": ofertaEditar.titulo})
            if (errorIguales.length > 1) {
                return res.status(400).json({"error": 'Ya existe una oferta con ese nombre'})
            }
            const ofertaEditada = await ofertasModel.findByIdAndUpdate(id, {"titulo": ofertaEditar.titulo, "descripcion": ofertaEditar.descripcion, "imagen": ofertaEditar.imagen, "fecha_expiracion": ofertaEditar.fecha_expiracion})
            if (ofertaEditada) {
                return res.status('200').json({"ofertaEditada": {"_id": ofertaEditada._id, "titulo": ofertaEditar.titulo, "descripcion": ofertaEditar.descripcion, "imagen": ofertaEditar.imagen, "fecha_expiracion": ofertaEditar.fecha_expiracion}})
            }
            return res.status('400').json({"mensaje": "No se editó esa oferta"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async eliminar(req, res, next) { 
        try {
            const id = req.params.id
            const ofertaVerificacion = await ofertasModel.findById(id);
            if (!ofertaVerificacion) {
                return res.status('400').json({"mensaje": "No Existe esa oferta"})
            }
            const ofertaEliminada = await ofertasModel.findByIdAndDelete(id)
            if (ofertaEliminada) {
                return res.status('200').json({"ofertaEliminada": ofertaEliminada, "mensaje": "Se ha eliminado con exito la oferta"})
            }
            return res.status('400').json({"mensaje": "No se eliminó esa oferta"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new ofertasControllers();