var express = require('express');
var router = express.Router();

const serviciosControllers = require("../controllers/servicios.c")

router.get('/' , serviciosControllers.listar);

module.exports = router;