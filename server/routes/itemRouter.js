const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemController.js');

router.post('/');
router.get('/:id');
router.get('/');


module.exports = router;