var express = require('express');
var router = express.Router();
var buttonController = require('../controllers/ButtonController');
var apiButtonController = require('../controllers/ApiButtonController');
/* GET home page. */
router.get('/', buttonController.buttons);
router.get('/create-button', buttonController.createButton);
router.get('/delete-button', buttonController.deleteButton);

router.get('/api/buttons', apiButtonController.buttons);
router.post('/api/change-state', apiButtonController.changeState);

router.post('/store-button', buttonController.storeButton);
router.post('/change-state', buttonController.changeState);

module.exports = router;
