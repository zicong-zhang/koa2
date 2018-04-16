// import {a, b, c} from '../controllers/user';
const router = require('koa-router')();
const fs = require('fs'); 

const userController = require('../../controllers/user_controller.js');
// TODO 
// 正则过滤路径，渲染html、请求资源文件无需格式化数据
// utf-8 和 utf-8(无BOM)的区别

router
	.get('/a', userController.login)
	.post('/b', userController.register)
	.post('/c', userController.getConfig)
	.post('/d', ctx => {
		let a = fs.readFileSync('./aa/config/tpl.txt', 'utf8');
		ctx.response.type = 'html';
		ctx.body = a.toString('utf8').replace(/[(\n)(\r)]/g, '');
		console.log('a:_____', a.toString().trim());
	})
	
	module.exports = router;