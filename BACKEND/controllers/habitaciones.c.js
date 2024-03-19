const habitacionesModel = require("../models/habitaciones.m")
const reservasModel = require("../models/reservas.m");
const { v4 : uuidv4 } = require("uuid");

class habitacionesControllers {
    async listar(req, res, next) {
        try {
          const habitaciones = await habitacionesModel.find();
          const reservas = await reservasModel.find();
          let date = new Date();
    
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let fechaHoy = '';
    
          if (month < 10) {
            fechaHoy = `${year}-0${month}-${day}`
          } else {
            fechaHoy = `${year}-${month}-${day}`
          }
          for (let i = 0; i < reservas.length; i++) {
            if (fechaHoy >= reservas[i].fecha_inicio) {
                if (fechaHoy <= reservas[i].fecha_salida) {
                    for (let a = 0; a < habitaciones.length; a++) {
                        if (habitaciones[a].nombre === reservas[i].habitacion) {
                            console.log('si sirve')
                            habitaciones[a].disponible = 'Reservado'
                            console.log(habitaciones[a])
                        }
                    }
                }
            }
          }
          if (habitaciones.length > 0) {
            return res.status("200").json({
              habitaciones: habitaciones,
              mensaje: "Se han listado con éxito las habitaciones",
            });
          }
          return res
            .status("200")
            .json({ mensaje: "No hay habitaciones disponibles" });
        } catch (error) {
          console.log("Hubo algún error", error); // vemos error por consola
          res.status("404").json({ error: error }); //estado
        }
      }

    async crear(req, res, next) { 
        try {
            const habitacion = req.body
            const errorIguales = await habitacionesModel.find({nombre: habitacion.nombre})
            if (errorIguales.length > 0) {
                return res.status(400).json({"error": 'Ya existe una habitacion con ese nombre'})
            }
            const habitacionCreada = await habitacionesModel.create(habitacion)
            if (habitacionCreada) {
                return res.status(201).json({"habitacion": habitacionCreada, "mensaje": "Habitación creada exitosamente"})
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
            const habitacion = await habitacionesModel.findById(id);
            if (habitacion) {
                return res.status('200').json({"habitacion": habitacion, "mensaje": "Se ha encontrado con exito la habitacion"})
            }
            return res.status('400').json({"mensaje": "No Existe esa habitación"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async editar(req, res, next) { 
        try {
            const id = req.params.id
            const habitacionEditar = req.body
            const habitacionVerificacion = await habitacionesModel.findById(id);
            if (!habitacionVerificacion) {
                return res.status('400').json({"mensaje": "No Existe esa habitación"})
            }
            const errorIguales = await habitacionesModel.find({"nombre": habitacionEditar.nombre})
            if (errorIguales.length > 1) {
                return res.status(400).json({"error": 'Ya existe una habitacion con ese nombre'})
            }
            const habitacionEditada = await habitacionesModel.findByIdAndUpdate(id, {"nombre": habitacionEditar.nombre, "descripcion": habitacionEditar.descripcion, "tarifa": habitacionEditar.tarifa, "cantidad": habitacionEditar.cantidad})
            if (habitacionEditada) {
                return res.status('200').json({"habitacionEditada": {"_id": habitacionEditada._id, "calificacion": habitacionEditada.calificacion, "nombre": habitacionEditar.nombre, "descripcion": habitacionEditar.descripcion, "tarifa": habitacionEditar.tarifa, "cantidad": habitacionEditar.cantidad}, "mensaje": "Se ha editado con exito la habitación"})
            }
            return res.status('400').json({"mensaje": "No se editó esa habitación"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async eliminar(req, res, next) { 
        try {
            const id = req.params.id
            const habitacionVerificacion = await habitacionesModel.findById(id);
            if (!habitacionVerificacion) {
                return res.status('400').json({"mensaje": "No Existe esa habitación"})
            }
            const habitacionEliminada = await habitacionesModel.findByIdAndDelete(id)
            if (habitacionEliminada) {
                return res.status('200').json({"habitacionEliminada": habitacionEliminada, "mensaje": "Se ha eliminado con exito la habitación"})
            }
            return res.status('400').json({"mensaje": "No se eliminó esa habitación"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new habitacionesControllers();