const fs = require('fs'); 

const ApiError = require('../error/api_error');
const ApiErrorName = require('../error/api_error_name');

class userController {
	// 登录
	static login(ctx) {
		console.log('a:_____', 'a');
		return ctx.body = '22222';
	}

	// 注册
	static async register(ctx) {
		console.log('ctx.query:_____', ctx.request.body);
		let { a, b } = ctx.request.body;
		console.log('a, b:_____', a, b);
		return ctx.body = {
			"aa": a
		};
	}

	// 获取配置文件
	static async getConfig(ctx) {
		let { id } = ctx.request.body;
		console.log('ctx.req:_____', ctx.request.body);

		if (id !== 1) {
			throw new ApiError('PARAM_ERROR');
			ctx.body = {
				a: 2,
				b: 3
			}
		} else {
			var a = await fs.readFileSync('./aa/config/config.txt', 'utf-8');
			let b = JSON.parse(a.toString('utf8').trim());
			ctx.body = b;
		}
		
		

		// trim() || replace(/^\uFEFF/, '')
	}
}

module.exports = userController;