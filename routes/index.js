var express = require('express');
var router = express.Router();
var buttonController = require('../controllers/ButtonController');
var apiButtonController = require('../controllers/ApiButtonController');
var apiFigureController = require('../controllers/ApiFigureController');
var FigureController = require('../controllers/FigureController');
/* GET home page. */
router.get('/', buttonController.buttons);
router.get('/create-button', buttonController.createButton);
router.get('/delete-button', buttonController.deleteButton);

router.get('/api/buttons', apiButtonController.buttons);
router.get('/figures', FigureController.figures);

router.get('/api/figures', apiFigureController.figures);

router.post('/api/figure', apiFigureController.addFigure);
router.post('/api/change-state', apiButtonController.changeState);

router.post('/store-button', buttonController.storeButton);
router.post('/change-state', buttonController.changeState);


module.exports = router;
