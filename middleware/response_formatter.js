const apiError = require('../error/api_error');

const responseFormatter = (ctx, next) => {
	
	try {
		let body = ctx.body ? { ...ctx.body } : {};
		
		ctx.body = {
			code: 0,
			msg: 'ok',
			data: { ...body }
		}

	} catch (error) {
		// console.log('error:_____', error.errorCode);
		//如果异常类型是 API 异常，将错误信息添加到响应体中返回。
		if (error instanceof apiError) {
			ctx.status = 200;
			ctx.body = {
				code: error.errorCode,
				msg: error.errorMsg
			}
		}

		// throw error;
	}
}

/**
 * 
 * @param {regExp} pattern 正则
 */
const urlFilter = pattern => {

	return async (ctx, next) => {
		let reg = new RegExp(pattern);

		// 先执行路由
		await next();

		if (reg.test(ctx.originalUrl)) {
			responseFormatter(ctx);
		}
	}
}

module.exports = urlFilter;

/* 
instanceof的普通的用法，obj instanceof Object 检测 Object.prototype 是否存在于参数obj的原型链上。
function Person(){};
var p =new Person();
console.log(p instanceof Person); // true
 */