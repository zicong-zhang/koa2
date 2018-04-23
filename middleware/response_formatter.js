const apiError = require('../error/api_error');
const fs = require('fs');
const path = require('path');

const responseFormatter = (ctx, next) => {

	try {
		let body = null;
		console.log(ctx.body)
		switch(true) {
			case ctx.body instanceof Array:
				body = [ ...ctx.body ];
				break;
			case ctx.body instanceof Object:
				body = { ...ctx.body };
				break;
			default:
				body = [];
				break;
		}

		ctx.body = {
			code: 0,
			msg: 'ok',
			data: body
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
			console.log('2233:_____', ctx.url);
			responseFormatter(ctx);
		} else if (/^\/public/.test(ctx.originalUrl)) {
			console.log('2233:_____', path.join(__dirname, `../${ctx.url}`));
			ctx.type = 'image/png;charset=utf8';

			let data = fs.readFileSync(path.join(__dirname, `../${ctx.url}`), 'base64').toString('base64');

			ctx.body = data
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
