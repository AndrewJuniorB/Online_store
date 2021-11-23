const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRouter');
const itemRouter = require('./itemRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');


router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/device', itemRouter);


module.exports = router;