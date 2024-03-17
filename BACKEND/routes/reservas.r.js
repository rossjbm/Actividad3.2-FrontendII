const express = require('express');
const router = express.Router();

const reservasControllers = require("../controllers/reservas.c")

router.get('/' , reservasControllers.listar);
router.post('/', reservasControllers.crear);
router.get('/:id' , reservasControllers.listarUna);
router.put('/:id', reservasControllers.editar)
router.delete('/:id', reservasControllers.eliminar)

module.exports = router;