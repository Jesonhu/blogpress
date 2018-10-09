import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import controller from './controller';
import logUtil from './util/log_util';
const PORT = 3000;
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  // @see next() https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000
  // await next();

  //响应开始时间
  const start = new Date();
  //响应间隔时间
  let ms;
  try {
    //开始进入到下一个中间件
    await next();

    ms = new Date().getTime() - start.getTime();
    //记录响应日志
    logUtil.loggResponse(ctx, ms);

  } catch (error) {
    
    ms = new Date().getTime() - start.getTime();
    //记录异常日志
    logUtil.loggError(ctx, error, ms);
  }
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

// logger
// app.use(async (ctx, next) => {
//   //响应开始时间
//   const start = new Date();
//   //响应间隔时间
//   let ms;
//   try {
//     //开始进入到下一个中间件
//     console.log('logger 0');
//     await next();
//     console.log('logger 1');

//     ms = new Date().getTime() - start.getTime();
//     //记录响应日志
//     logUtil.loggResponse(ctx, ms);

//   } catch (error) {
    
//     ms = new Date().getTime() - start.getTime();
//     //记录异常日志
//     logUtil.loggError(ctx, error, ms);
//   }

// });

app.listen(3000, () => {
  // console.log(`Server run in http://127.0.0.1:${PORT} success, in ${environment} mode.`);
  console.log(`Server run in http://127.0.0.1:${PORT} success, in ${process.env.NODE_ENV} mode.`);
});