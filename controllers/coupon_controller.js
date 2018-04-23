const Mock = require('mockjs');
const Random = Mock.Random;

const ApiError = require('../error/api_error');
const ApiErrorName = require('../error/api_error_name');

class couponController {
  static async getCouponList(ctx) {
    let { page, pageSize } = ctx.request.body;

    // if (page >= )

    let list = [];
    for (let i = 0; i < pageSize; i++) {
        let obj = {
            page: page,
            type: Random.csentence(5),
            limit: Random.csentence(5, 15),
            amount: Random.string('number', page+1, page+1),
            id: Random.string('number', 5),
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date('yyyy-MM-dd') // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        list.push(obj);
    }
    ctx.body = page > 3 ? [] : list;
  }
}

module.exports = couponController;
