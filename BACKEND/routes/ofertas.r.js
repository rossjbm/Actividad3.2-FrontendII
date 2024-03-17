const express = require('express');
const router = express.Router();

const ofertasControllers = require("../controllers/ofertas.c")

router.get('/' , ofertasControllers.listar);
router.post('/', ofertasControllers.crear);
router.get('/:id' , ofertasControllers.listarUna);
router.put('/:id', ofertasControllers.editar)
router.delete('/:id', ofertasControllers.eliminar)

module.exports = router;