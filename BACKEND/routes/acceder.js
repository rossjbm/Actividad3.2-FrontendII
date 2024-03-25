const express = require('express');
const router = express.Router();

const {verificar, registrar} = require('../controllers/acceder.c')

router.post('/ingresar' ,verificar);
router.post('/registrar' ,registrar);

module.exports = router;