var responseFormatter = async (ctx, next) => {
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
}

module.exports = responseFormatter;