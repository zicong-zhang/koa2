const apiError = require('../error/api_error');

var responseFormatter = async (ctx, next) => {
	try {
		await next();

		if (ctx.body) {
			let body = {...ctx.body};
			ctx.body = {
				code: 0,
				msg: 'ok',
				data: body
			}
		} else {
			ctx.body = {
				code: 0,
				msg: 'ok'
			}
		}

	} catch (error) {
		//如果异常类型是 API 异常，将错误信息添加到响应体中返回。
		if (error instanceof apiError) {
			ctx.status = 200;
			ctx.body = {
				code: error.code,
				msg: error.msg
			}
		}
	}
}

module.exports = responseFormatter;

/* 
instanceof的普通的用法，obj instanceof Object 检测 Object.prototype 是否存在于参数obj的原型链上。
function Person(){};
var p =new Person();
console.log(p instanceof Person); // true
 */