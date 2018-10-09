"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
const log_config_1 = require("../config/log_config");
// 加载配置文件
log4js.configure(log_config_1.default);
const errorLogger = log4js.getLogger('errorLogger');
const resLogger = log4js.getLogger('resLogger');
const logUtil = {
    loggError: function (ctx, error, resTime) {
        const _self = this;
        if (ctx && error) {
            errorLogger.error(_self.formatErrLog(ctx, error, resTime));
        }
    },
    loggResponse: function (ctx, resTime) {
        const _self = this;
        if (ctx) {
            resLogger.info(_self.formatResLog(ctx, resTime));
        }
    },
    formatResLog: function (ctx, resTime) {
        const _self = this;
        let logText = '';
        //响应日志开始
        logText += "\n" + "*************** response log start ***************" + "\n";
        //添加请求日志
        logText += _self.formatReqLog(ctx.request, resTime);
        //响应状态码
        logText += "response status: " + ctx.status + "\n";
        //响应内容
        logText += "response body: " + "\n" + JSON.stringify(ctx.body) + "\n";
        //响应日志结束
        logText += "*************** response log end ***************" + "\n";
        return logText;
    },
    formatReqLog: function (req, resTime) {
        const method = req.method;
        let logText = '';
        //访问方法
        logText += "request method: " + method + "\n";
        //请求原始地址
        logText += "request originalUrl:  " + req.originalUrl + "\n";
        //客户端ip
        logText += "request client ip:  " + req.ip + "\n";
        //开始时间
        let startTime;
        //请求参数
        if (method === 'GET') {
            logText += "request query:  " + JSON.stringify(req.query) + "\n";
            // startTime = req.query.requestStartTime;
        }
        else {
            logText += "request body: " + "\n" + JSON.stringify(req.body) + "\n";
            // startTime = req.body.requestStartTime;
        }
        //服务器响应时间
        logText += "response time: " + resTime + "\n";
        return logText;
    },
    formatErrLog: function (ctx, err, resTime) {
        const _self = this;
        let logText = '';
        //错误信息开始
        logText += "\n" + "*************** error log start ***************" + "\n";
        //添加请求日志
        // logText += _self.formatReqLog(ctx.resquest, resTime);
        logText += _self.formatReqLog(ctx.request, resTime);
        //错误名称
        logText += "err name: " + err.name + "\n";
        //错误信息
        logText += "err message: " + err.message + "\n";
        //错误详情
        logText += "err stack: " + err.stack + "\n";
        //错误信息结束
        logText += "*************** error log end ***************" + "\n";
        return logText;
    }
};
exports.default = logUtil;
