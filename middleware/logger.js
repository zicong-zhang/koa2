const timer = () => {
	let time = new Date();
	let hour = time.getHours();
	hour = hour < 10 ? '0' + hour : hour;
	let minutes = time.getMinutes();
	minutes = minutes < 10 ? '0' + minutes : minutes;
	let seconds = time.getSeconds();
	seconds = seconds < 10 ? '0' + seconds : seconds;

	return `[${ hour }:${ minutes }:${ seconds }]`;
}

const logger = async (ctx, next) => {
	let msg = '';
	if (ctx.method === "POST") {
		msg = `\x1B[35m${ ctx.url }\x1B[39m`;
	} else if (ctx.method === 'GET') {
		msg = `${ ctx.url } ${ ctx.querystring }`;
	}
	
	console.log(' ');
	console.log(`${ timer() } \x1B[90m <---\x1B[39m`);
	console.log(` ${ msg }`);
	console.log(` ${ JSON.stringify(ctx.request.body) }`)
	await next();
	console.log(` \x1B[90m --->\x1B[39m \x1B[36m${ JSON.stringify(ctx.body) }\x1B[39m`);
}

module.exports = logger;