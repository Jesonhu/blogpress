/// <reference types="koa-router" />
/// <reference types="koa-bodyparser" />
import { Context, Request } from 'koa';
declare const logUtil: ilogUtil;
interface ilogUtil {
    /**
     * 封装错误日志.
     *
     * @return {string}
     */
    loggError(ctx: Context, error: any, resTime: any): void;
    /**
     * 封装响应日志.
     */
    loggResponse(ctx: Context, resTime: any): void;
    /**
     * 格式化请求日志.
     */
    formatReqLog(req: Request, resTime: Date): string;
    /**
     * 格式化响应日志.
     */
    formatResLog(ctx: Context, resTime: Date): string;
    /**
     * 格式化错误日志.
     */
    formatErrLog(ctx: Context, err: any, resTime: any): string;
}
export default logUtil;
