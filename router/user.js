// import {a, b, c} from '../controllers/user';
const router = require('koa-router')();


router
	.get('/a', (ctx, next) => {
		console.log('a:_____', 'a');
		ctx.body = '22222';
	})
	.post('/b', (ctx) => {
		ctx.body = 'bbbb';
	})


	module.exports = router;