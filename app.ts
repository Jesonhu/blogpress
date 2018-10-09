import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import controller from './controller';
const logger = require('./util/koagger');
const PORT = 3000;
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  // @see next() https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000
  await next();
});

app.use(logger);

// parse request body:
app.use(bodyParser());

// add controllers:
// app.use(controller());

app.listen(3000, () => {
  // console.log(`Server run in http://127.0.0.1:${PORT} success, in ${environment} mode.`);
  console.log(`Server run in http://127.0.0.1:${PORT} success, in development mode.`);
});