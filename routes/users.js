var express = require('express');
var router = express.Router();
var indexController = require("../controller/index_controller");
/* GET users listing. */
router.get('/', indexController.displayIndex);

module.exports = router;
