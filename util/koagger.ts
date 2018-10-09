// import * as fs from 'fs';
// import * as uuid from 'uuid';
// import * as path from 'path';
// import * as mkdirp from 'mkdirp';
// import * as moment from 'moment';
// import * as koaPinoLogger from 'koa-pino-logger';
// import * as multistream from 'pino-multi-stream';

// const streamOpt = {flags: 'a', encoding: 'utf8'}
// const date = moment().format('YYYY-MM-DD')
// const logDir = path.join(__dirname, '../logs')
// let streams: multistream.LoggerOptions|multistream.Streams = [
//   {level: 'info', stream: process.stdout},
//   {level: 'error', stream: process.stderr}
// ]

// /* istanbul ignore if */
// if (process.env.NODE_ENV === 'production') {
//   if (!fs.existsSync(logDir)) mkdirp.sync(logDir)

//   streams = [
//     {level: 'info', stream: fs.createWriteStream(`logs/${date}-info.log`, streamOpt)},
//     {level: 'error', stream: fs.createWriteStream(`logs/${date}-error.log`, streamOpt)}
//   ]
// }

// module.exports = koaPinoLogger({
//   name: 'Koa-Ts',
//   level: process.env.NODE_ENV === 'test' ? 'silent' : /* istanbul ignore next */ 'info',
//   genReqId: req => req.headers['x-request-id'] || uuid.v4()
// }, multistream(streams));