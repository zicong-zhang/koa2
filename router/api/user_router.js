// import {a, b, c} from '../controllers/user';
const router = require('koa-router')();
const fs = require('fs'); 

// TODO 
// 正则过滤路径，渲染html、请求资源文件无需格式化数据
// utf-8 和 utf-8(无BOM)的区别

router
	.get('/a', (ctx, next) => {
		console.log('a:_____', 'a');
		ctx.body = '22222';
	})
	.post('/b', (ctx, next) => {
		console.log('ctx.query:_____', ctx.request.body);
		let { a, b } = ctx.request.body;
		console.log('a, b:_____', a, b);
		ctx.body = {
			"aa": a
		};
	})
	.post('/c', (ctx) => {

		var a = fs.readFileSync('./aa/config/config.txt', 'utf-8');
		// var b = JSON.stringify(a.toString('gbk'));
		console.log('a:_____', a);
		let b = JSON.parse(a.toString('utf8').trim());
		ctx.body = b.ABORT;

		// trim() || replace(/^\uFEFF/, '')
		
	})
	.post('/d', ctx => {
		let a = fs.readFileSync('./aa/config/tpl.txt', 'utf8');
		ctx.response.type = 'html';
		ctx.body = a.toString('utf8').replace(/[(\n)(\r)]/g, '');
		console.log('a:_____', a.toString().trim());
	})
	
	module.exports = router;