import blogpress from 'blogpress'
const Blog = blogpress.Blog;

const PORT = 3000;
export default async function bootstrap() {
  const app = new Blog();

  app.use(async ctx => {
    ctx.body = 'Hello World';
  });

  return await app.listen(PORT);
}