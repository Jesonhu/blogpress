/**
 * log4js 配置文件
 * 
 * 日志等级由低到高
 * ALL TRACE DEBUG INFO WARN ERROR FATAL OFF. 
 * 
 * @see 文章说明
 * https://www.jianshu.com/p/6b816c609669
 * @see 源码参考
 * https://github.com/tough1985/hello-koa2/tree/step3/
 * @see 关于log4js的appenders的配置说明
 * https://github.com/nomiddlename/log4js-node/wiki/Appenders
 */
import * as path from 'path';

//日志根目录
const baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
const errorPath = "/error";
//错误日志文件名
const errorFileName = "error";
// const errorFileName = "";
//错误日志输出完整路径
const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");


//响应日志目录
const responsePath = "/response";
//响应日志文件名
// const responseFileName = "response";
const responseFileName = "";
//响应日志输出完整路径
const responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// const responseLogPath = path.resolve(__dirname, "../logs/response/response");

export default {
  "appenders": {
    "out": { "type": 'console' },
    "errorLogger": {
      "type": "dateFile",
      "filename": errorLogPath,
      "encoding": "utf-8",
      "maxLogSize": 2000000,
      "numBackups": 5,
      "pattern": "-yyyy-MM-dd.log",
      "alwaysIncludePattern": true,
      "path": errorPath //自定义属性，错误日志的根目录
    },
    "resLogger": {
      "type": "dateFile",
      "filename": responseLogPath,
      "encoding": "utf-8",
      "maxLogSize": 2000000,
      "numBackups": 5,
      "pattern": "yyyy-MM-dd.log",
      "alwaysIncludePattern": true,
      "path": responsePath
    }
  },
  "categories": {
    "default": { "appenders": ['out'], "level": 'info' },
    "errorLogger": { "appenders": ['errorLogger'], "level": 'error' },
    "resLogger": { "appenders": ['resLogger'], "level": 'info' },
  },
  // "levels":{
  // "errorLogger":"ERROR",
  // "resLogger":"ALL"
  // },
  // "baseLogPath": baseLogPath //logs根目录
}