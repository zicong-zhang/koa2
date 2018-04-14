const Koa = require('koa')
const app = new Koa();
const cors = require('koa2-cors');
const koaRouter = require('koa-router')();
const logger = require('koa-logger');

const api = require('./router/api/index');

const responseFormatter = require('./middleware/response_formatter');

app.use(cors())
.use(logger());

app.use(responseFormatter);


koaRouter.use('/api', api.routes(), api.allowedMethods());
app.use(koaRouter.routes(), koaRouter.allowedMethods())



app.listen(8866, () => {
	console.log('running at http://localhost:8866');
})