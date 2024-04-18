interface ReporterConfig {
    /**
     * 上报服务器地址
     */
    serverUrl: string;
    /**
     * 应用名称
     */
    appname: string;
    /**
     * 应用密钥
     */
    appsecret: string;
    /**
     * 显示调试日志
     */
    debug?: boolean;
    /**
     * 立即生成设备 id
     */
    initDeviceId?: boolean;
}
declare class YoungReporter {
    #private;
    constructor(config: ReporterConfig);
    /**
     * 配置设备标识
     * @param id 不传则默认使用 canvas 生成浏览器指纹，非浏览器环境中会报错
     */
    setDeviceId(id?: string): void;
    /**
     * 设置用户标识
     * @param id 用户标识
     */
    login(id: string | number): void;
    /**
     * 清除用户标识
     */
    logout(): void;
    /**
     * 单次上报
     * @param event_id 事件 id
     * @param args 其他参数对象
     */
    track(event_id: string | number, args?: Record<string, any>): void;
    /**
     * 定时上报（单位 s）
     * @param fn 获取/设置上次上报时间
     * @param fn.get 获取
     * @param fn.set 设置
     * @param cbk 上报回调函数
     * @param timeGap 上报间隔时间
     */
    flush(fn: {
        get: () => number;
        set: (t: number) => void;
    }, cbk: Function, timeGap?: number): void;
}

export { type ReporterConfig, YoungReporter as default };
