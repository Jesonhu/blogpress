# Koa(2.x) & TypeScript 项目

### 特色
+ 自动引入 `controllers` 文件夹下的文件(需要导出, 但是会自动引入此文件夹下面的所有`*.ts` 或 `*.js`文件)

### 命令(OS: win)
```cmd
# 安装依赖
npm install
```

```cmd
# ts (开发环境:development)
npm run dev
```

```cmd
# ts 编译为 js
npm run build 
# @type文件夹不存在导致报错处理(仅把ts编译为js)
npm run compile
```

```cmd
# 运行js(生产环境)
npm run serve
```

### 参考
+ [url2-koa-github](https://github.com/michaelliao/learn-javascript/tree/master/samples/node/web/koa/url2-koa)
+ [处理URL](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471133885340dad9058705804899b1cc2d0a10e7dc80000)
+ [koa-ts-start](https://gitee.com/weblife/koa-ts-start)