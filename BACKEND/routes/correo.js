var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')


router.post('/', async function(req, res, next) {

  const datos = req.body
  console.log(datos)

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
    to: datos.correo,
    subject: 'HazbinHotel: Reservación Exitosa',
    text: '¡Hola ' + datos.nombre + '! Somos HazbinHotel. \n\nHazbinHotel es más que un lugar para quedarse, es una experiencia, un refugio de elegancia, tranquilidad, seguridad y diversión. \n\nNos ubicamos en C. Antonio Díaz, Pampatar 6316, Nueva Esparta, Venezuela. \n\n Has reservado una habitación en nuestro hotel estrella HazbinHotel con los siguientes datos:\n\n —Responsable de la reservación: ' + datos.nombre + ', C.I:' + datos.cedula + '.\n\n —Reservación de la habitación: ' + datos.habitacion + ' para un total de ' + datos.cantidad + ' personas. \n\n—Reservado desde el: ' + datos.fechaInicio + ' hasta el: ' + datos.fechaSalida + '\n\n Esta reservación tiene un costo de 80$. A continuación te presentamos los métodos de pago: \n\n —Transferencias Bancarias. \n\n —Pago en Efectivo solo en Dólares. \n\n —Tarjetas de Crédito y Débito. \n\n Responde este correo para más información y confirmar tu reservación. También puedes llamarnos al +58 295-2345678 y al +58 412-4657234. En nuestras redes verás las últimas ofertas y noticias del hotel, puedes verlas en nuestro sitio web. \n\n ¡Te esperamos! \n\nHazbinHotel: Un Paraíso a tu Disposición'
  }

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje)

  console.log(info)
  res.status(200).json({ info: info, status: 200})
});

module.exports = router;
