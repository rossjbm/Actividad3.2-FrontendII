const reservasModel = require("../models/reservas.m")
const { v4 : uuidv4 } = require("uuid");
const nodemailer = require('nodemailer')

class reservasControllers {
    async listar(req, res, next) { 
        try {
            const data = await reservasModel.find();
            if (data.length > 0) {
                return res.status('200').json({"reservas": data, "mensaje": "Se han listado con éxito las habitaciones"})
            }
            return res.status('200').json({"mensaje": "No hay reservas disponibles"}) 
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
    
    async crear(req, res, next) { 
        try {
            const reserva = req.body
            const reservas = await reservasModel.find()
            for (let i = 0; i < reservas.length; i++) {
                if (reserva.fecha_inicio >= reservas[i].fecha_inicio) {
                    if (reserva.fecha_inicio <= reservas[i].fecha_salida) {
                        console.log(true)
                        if (reserva.habitacion === reservas[i].habitacion) {
                            return res.status(400).json({"error": 'Ya existe una reserva en ese rango de fecha en esa habitacion'})
                        }
                    }
                }
                if (reserva.fecha_salida >= reservas[i].fecha_inicio) {
                    if (reserva.fecha_salida <= reservas[i].fecha_salidareserva.fecha_salida <= reservas[i].fecha_salida) {
                        console.log(true)
                        if (reserva.habitacion === reservas[i].habitacion) {
                            return res.status(400).json({"error": 'Ya existe una reserva en ese rango de fecha en esa habitacion'})
                        }
                    }
                }
            }
            const reservaCreada = await reservasModel.create(reserva)
            if (reservaCreada) {
                const config = {
                    host: 'smtp.gmail.com',
                    port: 587,
                    auth: {
                      user: 'hazbinhotelreservaciones@gmail.com',
                      pass: 'sjch bged gzcg sicf'
                    }
                }
                
                const mensaje = {
                    from: 'hazbinhotelreservaciones@gmail.com',
                    to: reserva.correo,
                    subject: 'HazbinHotel: Reservación Exitosa',
                    text: '¡Hola ' + reserva.nombre + '! Somos HazbinHotel. \n\nHazbinHotel es más que un lugar para quedarse, es una experiencia, un refugio de elegancia, tranquilidad, seguridad y diversión. \n\nNos ubicamos en C. Antonio Díaz, Pampatar 6316, Nueva Esparta, Venezuela. \n\n Has reservado una habitación en nuestro hotel estrella HazbinHotel con los siguientes datos:\n\n —Responsable de la reservación: ' + reserva.nombre + ', C.I:' + reserva.cedula + '.\n\n —Reservación de la habitación: ' + reserva.habitacion + ' para un total de ' + reserva.cantidad + ' personas. \n\n—Reservado desde el: ' + reserva.fecha_inicio + ' hasta el: ' + reserva.fecha_salida + '\n\n Esta reservación tiene un costo de 80$. A continuación te presentamos los métodos de pago: \n\n —Transferencias Bancarias. \n\n —Pago en Efectivo solo en Dólares. \n\n —Tarjetas de Crédito y Débito. \n\n Responde este correo para más información y confirmar tu reservación. También puedes llamarnos al +58 295-2345678 y al +58 412-4657234. En nuestras redes verás las últimas ofertas y noticias del hotel, puedes verlas en nuestro sitio web. \n\n ¡Te esperamos! \n\nHazbinHotel: Un Paraíso a tu Disposición'
                }
                
                const transport = nodemailer.createTransport(config);
                
                const info = await transport.sendMail(mensaje)
                
                console.log(info)
                return res.status(201).json({"reserva": reservaCreada, "mensaje": "Reservación creada exitosamente"})
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
            const reserva = await reservasModel.findById(id);
            if (reserva) {
                return res.status('200').json({"reserva": reserva, "mensaje": "Se ha encontrado con exito la reserva"})
            }
            return res.status('400').json({"mensaje": "No Existe esa reserva"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async editar(req, res, next) { 
        try {
            const id = req.params.id
            const reservaEditar = req.body
            const reservas = await reservasModel.find()
            const reservaVerificacion = await reservasModel.findById(id);
            if (!reservaVerificacion) {
                return res.status('400').json({"mensaje": "No Existe esa reserva"})
            }
            for (let i = 0; i < reservas.length; i++) {
                if (reservaEditar.fecha_inicio >= reservas[i].fecha_inicio && reservaEditar.fecha_inicio <= reservas[i].fecha_salida) {
                    console.log(true)
                    if (reservaEditar.habitacion === reservas[i].habitacion) {
                        return res.status(400).json({"error": 'Ya existe una reserva en ese rango de fecha en esa habitacion'})
                    }
                }
                if (reservaEditar.fecha_salida >= reservas[i].fecha_inicio && reservaEditar.fecha_salida <= reservas[i].fecha_salida) {
                    console.log(true)
                    if (reservaEditar.habitacion === reservas[i].habitacion) {
                        return res.status(400).json({"error": 'Ya existe una reserva en ese rango de fecha en esa habitacion'})
                    }
                }
            }
            const reservaEditada = await reservasModel.findByIdAndUpdate(id, {"nombre": reservaEditar.nombre, "cedula": reservaEditar.cedula, "correo": reservaEditar.correo, "habitacion": reservaEditar.habitacion, "fecha_inicio": reservaEditar.fecha_inicio, "fecha_salida": reservaEditar.fecha_salida})
            if (reservaEditada) {
                return res.status('200').json({"reservaEditada": {"_id": reservaEditada._id, "nombre": reservaEditar.nombre, "cedula": reservaEditar.cedula, "correo": reservaEditar.correo, "habitacion": reservaEditar.habitacion, "fecha_inicio": reservaEditar.fecha_inicio, "fecha_salida": reservaEditar.fecha_salida}, "mensaje": "Se ha editado con exito la reserva"})
            }
            return res.status('400').json({"mensaje": "No se editó esa reservación"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async eliminar(req, res, next) { 
        try {
            const id = req.params.id
            const reservaVerificacion = await reservasModel.findById(id);
            if (!reservaVerificacion) {
                return res.status('400').json({"mensaje": "No Existe esa reserva"})
            }
            const reservaEliminada = await reservasModel.findByIdAndDelete(id)
            if (reservaEliminada) {
                return res.status('200').json({"reservaEliminada": reservaEliminada, "mensaje": "Se ha eliminado con exito la reserva"})
            }
            return res.status('400').json({"mensaje": "No se eliminó esa reserva"})
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new reservasControllers();