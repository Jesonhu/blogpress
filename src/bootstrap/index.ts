import blogpress from 'blogpress'
import CONFIG from '../config'
import db from '../model/db';

const Blog = blogpress.Blog;

const sqlStr = `
CREATE TABLE IF NOT EXISTS test_create_table(
  id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(40) NOT NULL,
  submission_date DATE,
  PRIMARY KEY ( id )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
`

const queryTableStr = `
select * from test_create_table
`

export default async function bootstrap() {
  const app = new Blog()

  // await db.create(sqlStr)
  db.query(queryTableStr)
    .then(res => {
      console.log('res', res['author']);
    })
    .catch(err => {
      console.log('err', err);
    });

  app.use(async ctx => {
    ctx.body = 'Hello World'
  });

  const port = CONFIG.PORT

  return await app.listen(port)
}