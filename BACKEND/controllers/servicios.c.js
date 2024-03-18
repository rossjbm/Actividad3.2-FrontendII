const serviciosModel = require("../models/servicios.m")
const { v4: uuidv4 } = require("uuid");
const path = require('path');
const { deleteImage } = require("../service/multer");

class serviciosControllers {
    async listar(req, res, next) {
        try {
            const datos = await serviciosModel.find();
            if (!datos) {
                throw ('No hay Servicios Registrados')
            }
            console.log(typeof (datos), datos) //vemos el tipo que es datos (un objeto)
            res.send(datos).status('200'); //enviamos respuesta y el estado
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({ "error": error }) //estado
        }
    }

    async crear(req, res, next) {
        try {
            // Obtener la ruta de la imagen
            const imagePath = req.file.path;
            // Obtener el nombre de la imagen
            const image = path.basename(imagePath);
            const servicios = req.body
            const errorIguales = await serviciosModel.find({ titulo: servicios.titulo })
            if (errorIguales.length > 0) {
                deleteImage(imagePath);
                return res.status(400).json({ "error": 'Ya existe un servicio con ese titulo' })
            }
            const servicioCreado = await serviciosModel.create({ "titulo": servicios.titulo, "descripcion": servicios.descripcion, "imagen": image })
            if (servicioCreado) {
                return res.status(201).json({ "servicio": servicioCreado, "mensaje": "Servicio creado exitosamente" })
            }
            return res.status(404).json({ "error": "Error inesperado en la petición" })
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            return res.status('404').json({ "error": error }) //estado
        }
    }

    async listarUna(req, res, next) {
        try {
            const id = req.params.id
            const servicio = await serviciosModel.findById(id);
            if (servicio) {
                return res.status('200').json({ "servicio": servicio, "mensaje": "Se ha encontrado con exito el servicio" })
            }
            return res.status('400').json({ "mensaje": "No Existe ese servicio" })
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({ "error": error }) //estado
        }
    }

    async editar(req, res, next) {
        try {
            const id = req.params.id
            const servicioEditar = req.body
            const servicioVerificacion = await serviciosModel.findById(id);
            // Obtener la ruta de la imagen
            const folder = `../../static/images/${servicioVerificacion.imagen}`;
            const imagePath = req.file?.path ?? path.join(__dirname, folder);
            const imageChange = req.file?.path ? true : false;
            if (!servicioVerificacion) {
                return res.status('400').json({ "mensaje": "No Existe ese servicio" })
            }
            const errorIguales = await serviciosModel.find({ "titulo": servicioEditar.titulo })
            if (errorIguales.length > 1) {
                return res.status(400).json({ "error": 'Ya existe un servicio con ese titulo' })
            }
            // Eliminar imagen anterior si se va a actualizar
            if (req.file && req.file?.path) {
                const imageExisting = path.join(__dirname, folder);
                deleteImage(imageExisting);
            }
            const servicioEditada = await serviciosModel.findByIdAndUpdate(id, { "titulo": servicioEditar.nombre, "descripcion": servicioEditar.descripcion, "imagen": req.file?.path ? path.basename(imagePath) : servicioVerificacion.imagen })
            if (servicioEditada) {
                return res.status('200').json({ "servicioEditado": { "_id": servicioEditada._id, "titulo": servicioEditar.nombre, "descripcion": servicioEditar.descripcion } })
            }
            return res.status('400').json({ "mensaje": "No se editó ese servicio" })
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({ "error": error }) //estado
        }
    }

    async eliminar(req, res, next) {
        try {
            const id = req.params.id
            const servicioVerificacion = await serviciosModel.findById(id);
            if (!servicioVerificacion) {
                return res.status('400').json({ "mensaje": "No Existe esa habitación" })
            }
            const servicioEliminada = await serviciosModel.findByIdAndDelete(id)
            if (servicioEliminada) {
                return res.status('200').json({ "servicioEliminada": servicioEliminada, "mensaje": "Se ha eliminado con exito el servicio" })
            }
            return res.status('400').json({ "mensaje": "No se eliminó ese servicio" })
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({ "error": error }) //estado
        }
    }
}

module.exports = new serviciosControllers();