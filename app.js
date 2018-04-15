const Koa = require('koa')
const app = new Koa();
const cors = require('koa2-cors');
const server = require('koa-static');
const koaRouter = require('koa-router')();
const koaBody = require('koa-body');
const logger = require('koa-logger');

const api = require('./router/api/index');

const responseFormatter = require('./middleware/response_formatter');

app
.use(koaBody())
.use(cors())
.use(logger());

app.use(responseFormatter);


koaRouter.use('/api', api.routes(), api.allowedMethods());
app.use(koaRouter.routes(), koaRouter.allowedMethods())



app.listen(8866, () => {
	console.log('running at http://localhost:8866');
})

/* 
koa-body 支持类型
	1、multipart/form-data
	2、application/x-www-urlencoded
	3、application/json
const koaBody = require('koa-body')({
    multipart: true,  // 允许上传多个文件
    formidable: { 
    uploadDir: 'public/images/headImage',// 上传的文件存储的路径 
    keepExtensions: true  //  保存图片的扩展名
 }
});
 */