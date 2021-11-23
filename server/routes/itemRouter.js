const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemController.js');

router.post('/', itemController.create);
router.get('/:id', itemController.getAll);
router.get('/', itemController.getOne);


module.exports = router;