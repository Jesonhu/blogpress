import * as Koa from 'koa';

namespace blogpress {
  interface IBlog {
    app: Koa
  }
  export class Blog extends Koa {}
}

export default blogpress;
