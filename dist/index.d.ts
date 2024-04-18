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
    debug?: boolean;
}
declare class YoungReporter {
    #private;
    private logger;
    private http;
    constructor(config: ReporterConfig);
    private mergeProps;
    login(id: string | number): void;
    loginout(): void;
    track(event_id: string | number, args: Record<string, any>): void;
}

export { type ReporterConfig, YoungReporter as default };
