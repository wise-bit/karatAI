var express = require('express');
var router = express.Router();
var indexController = require("../controller/index_controller");

/* GET home page. */

router.get('/', indexController.displayIndex);



module.exports = router;
