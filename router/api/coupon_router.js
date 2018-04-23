const router = require('koa-router')();

const couponController = require('../../controllers/coupon_controller');

router
  .post('/couponlist', couponController.getCouponList)


module.exports = router;
