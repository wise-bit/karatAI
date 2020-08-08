var express = require('express');
var router = express.Router();
var indexController = require("../controller/index_controller");

/* GET home page. */

router.get('/', indexController.displayIndex);
router.get('/canvas', indexController.displayCanvas);


module.exports = router;
