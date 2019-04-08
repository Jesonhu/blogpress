import blogpress from 'blogpress'
import CONFIG from '../config'

const Blog = blogpress.Blog;

export default async function bootstrap() {
  const app = new Blog()

  app.use(async ctx => {
    ctx.body = 'Hello World'
  });

  const port = CONFIG.PORT

  return await app.listen(port)
}