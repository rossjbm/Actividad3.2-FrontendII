const serviciosModel = require("../models/servicios.m")
const { v4 : uuidv4 } = require("uuid");

class serviciosControllers {
    async listar(req, res, next) { 
        try {
            const datos = await serviciosModel.find();
            if (!datos) {
                throw('No hay Servicios Registrados') 
            }
            console.log(typeof(datos), datos) //vemos el tipo que es datos (un objeto)
            res.send(datos).status('200'); //enviamos respuesta y el estado
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new serviciosControllers();