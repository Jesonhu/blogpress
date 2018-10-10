/// <reference types="koa" />
/// <reference types="koa-router" />
/// <reference types="koa-bodyparser" />
/// <reference types="koa-compose" />
export default function (dir?: string): import("koa-compose").Middleware<import("koa").Context>;
