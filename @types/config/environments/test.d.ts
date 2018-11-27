declare const _default: {
    identity: string;
    /**
     * 服务器开启的端口.
     */
    port: number;
    /**
     * `Mysql` 相关配置
     */
    mysql: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
    };
};
export default _default;
