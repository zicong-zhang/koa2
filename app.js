const Koa = require('koa')
const app = new Koa()
const koaRouter = require('koa-router');

// const router = new koaRouter()

const router = require('./router/user');

app.use(async (ctx, next) => {
	console.log('88:_____', 88);
	await next();
	// ctx.body = 'aaa';
	// console.log(ctx);
	// const ct = [...ctx];
	ctx.response = 111;
})



app.use(router.routes())

// app.use(router.routes());

console.log('55:_____', 22);
app.listen(8866, () => {
	console.log('running at http://localhost:8866:_____', 'running at http://localhost:8866');
})