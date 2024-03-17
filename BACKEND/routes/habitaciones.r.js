const express = require('express');
const router = express.Router();

const habitacionesControllers = require("../controllers/habitaciones.c")

router.get('/' , habitacionesControllers.listar);
router.post('/', habitacionesControllers.crear);
router.get('/:id' , habitacionesControllers.listarUna);
router.put('/:id', habitacionesControllers.editar)
router.delete('/:id', habitacionesControllers.eliminar)

module.exports = router;