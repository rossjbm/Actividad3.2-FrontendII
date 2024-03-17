const comentariosModel = require("../models/comentarios.m")
const { v4 : uuidv4 } = require("uuid");
const habitacionesModel = require("../models/habitaciones.m");

class comentariosControllers {
    async listar(req, res, next) { 
        try {
            const comentarios = await comentariosModel.find();
            if (comentarios.length > 0) {
                return res.status('200').json({"comentarios": comentarios, "mensaje": "Se han listado con éxito los comentarios"})
            }
            return res.status('200').json({"mensaje": "No hay comentarios disponibles"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async crear(req, res, next) { 
        try {
            const comentario = req.body
            const habitacionExiste = await habitacionesModel.find({"nombre": comentario.habitacion})
            if (habitacionExiste.length === 0) {
                return res.status('400').json({"error": "No existe la habitacion del comentario"})
            }
            if (comentario.calificacion < 0 || comentario.calificacion > 5) {
                return res.status('400').json({"error": "debes calificar con una escala de 0 a 5"})
            }
            const comentarioCreado = await comentariosModel.create(comentario)
            if (comentarioCreado) {
                return res.status('201').json({"comentario": comentarioCreado, "mensaje": "comentario creado con éxito"})
            }
            return res.status('400').json({"error": "No se pudo crear el comentario"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async editar(req, res, next) { 
        try {
            const id = req.params.id
            const comentarioEditar = req.body
            const comentarioVerificacion = await comentariosModel.findById(id);
            if (!comentarioVerificacion) {
                return res.status('400').json({"mensaje": "No Existe ese comentario"})
            }
            const habitacionExiste = await habitacionesModel.find({"nombre": comentarioEditar.habitacion})
            if (habitacionExiste.length === 0) {
                return res.status('400').json({"error": "No existe la habitacion del comentario"})
            }
            if (comentarioEditar.calificacion < 0 || comentarioEditar.calificacion > 5) {
                return res.status('400').json({"error": "debes calificar con una escala de 0 a 5"})
            }
            const comentarioEditado = await comentariosModel.findByIdAndUpdate(id, {"usuario": comentarioEditar.usuario, "comentario": comentarioEditar.comentario, "habitacion": comentarioEditar.habitacion, "calificacion": comentarioEditar.calificacion})
            if (comentarioEditado) {
                return res.status('200').json({"comentarioEditado": {"_id": comentarioEditado._id, "usuario": comentarioEditar.usuario, "comentario": comentarioEditar.comentario, "habitacion": comentarioEditar.habitacion, "calificacion": comentarioEditar.calificacion}, "mensaje": "Se ha editado con exito el comentario"})
            }
            return res.status('400').json({"mensaje": "No se editó ese comentario"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async eliminar(req, res, next) { 
        try {
            const id = req.params.id
            const comentarioVerificacion = await comentariosModel.findById(id);
            if (!comentarioVerificacion) {
                return res.status('400').json({"mensaje": "No Existe ese Comentario"})
            }
            const comentarioEliminado = await comentariosModel.findByIdAndDelete(id)
            if (comentarioEliminado) {
                return res.status('200').json({"comentarioEliminado": comentarioEliminado, "mensaje": "Se ha eliminado con exito el comentario"})
            }
            return res.status('400').json({"mensaje": "No se eliminó ese comentario"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new comentariosControllers();