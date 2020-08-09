var express = require('express');
var router = express.Router();
var indexController = require("../controller/index_controller");

/* GET home page. */

router.get('/', indexController.displayIndex);


router.get('/camera', indexController.displayCamera);
router.get('/loading', indexController.displayLoading);
router.get('/ready', indexController.displayReady);
router.get('/score', indexController.displayScore);
router.get('/canvas', indexController.displayCanvas);


module.exports = router;
