const express = require('express');
const router = express.Router();
const ofertasControllers = require("../controllers/ofertas.c");
const { upload } = require('../service/multer');

router.get('/' , ofertasControllers.listar);
router.post('/', upload.single('image'), ofertasControllers.crear);
router.get('/:id' , ofertasControllers.listarUna);
router.put('/:id', upload.single('image'), ofertasControllers.editar)
router.delete('/:id', ofertasControllers.eliminar)

module.exports = router;