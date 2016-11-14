var express = require('express');
var router = express.Router();
var buttonController = require('../controllers/ButtonController');
/* GET home page. */
router.get('/', buttonController.buttons);

module.exports = router;
