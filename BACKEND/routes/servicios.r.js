var express = require('express');
var router = express.Router();

const serviciosControllers = require("../controllers/servicios.c");
const { upload } = require('../service/multer');

router.get('/' , serviciosControllers.listar);
router.post('/', upload.single('image'), serviciosControllers.crear);
router.get('/:id' , serviciosControllers.listarUna);
router.put('/:id', upload.single('image'), serviciosControllers.editar)
router.delete('/:id', serviciosControllers.eliminar)

module.exports = router;