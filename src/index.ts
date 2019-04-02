import blogjs from './blogjs'
const app = new blogjs.Blog();

app.use(ctx => {
  ctx.body = 'Hello World';
})

app.listen(3000);

console.log('Running In: http://127.0.0.1:3000');



