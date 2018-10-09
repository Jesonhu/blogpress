"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * 去掉字符串两边空白
     *
     * @see [参考](https://www.jb51.net/article/109522.htm)
     */
    trim(str = '') {
        const reg = /(^\s*)|(\s*$)/g;
        return str.replace(reg, '');
    }
};
