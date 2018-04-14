const router = require('koa-router')()
const userRouter = require('./user_router')

router.use('/user', userRouter.routes(), userRouter.allowedMethods());

module.exports = router;