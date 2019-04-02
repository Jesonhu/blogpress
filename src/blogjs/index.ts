import Koa from 'koa';

namespace blogjs {
  interface IBlog {
    app: Koa
  }
  export class Blog extends Koa {}
}

export default blogjs;
