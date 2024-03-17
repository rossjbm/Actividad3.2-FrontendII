var express = require('express');
var router = express.Router();

const serviciosControllers = require("../controllers/servicios.c")

router.get('/' , serviciosControllers.listar);
router.post('/', serviciosControllers.crear);
router.get('/:id' , serviciosControllers.listarUna);
router.put('/:id', serviciosControllers.editar)
router.delete('/:id', serviciosControllers.eliminar)

module.exports = router;