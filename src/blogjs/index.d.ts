// import Koa from 'koa';
// import { blog } from 'blogjs';

// Notice: import xx from 'blogjs' 为什么可以使用呢？
// 1. tsconfig.json 指定了 --path "blogjs"

// declare module 'blogjs' {
//   export interface Application extends Koa {}

  // 主要功能.
  // export interface Blog {
  //   app: Application;
  // }
// }

// declare namespace BlogJS {
//   interface IBlog {
//     app: Koa
//   }
//   // export let blog: IBlog;

//   export class blog extends Koa {} 
// }

// export = BlogJS;