const express = require('express');
const router = express.Router();

const comentariosControllers = require("../controllers/comentarios.c")

router.get('/' , comentariosControllers.listar);
router.post('/', comentariosControllers.crear);
router.put('/:id', comentariosControllers.editar);
router.delete('/:id', comentariosControllers.eliminar);


module.exports = router;