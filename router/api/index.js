const router = require('koa-router')()
const userRouter = require('./user_router')
const couponRouter = require('./coupon_router')

router.use('/user', userRouter.routes(), userRouter.allowedMethods());
router.use('/coupon', couponRouter.routes(), couponRouter.allowedMethods());

module.exports = router;
