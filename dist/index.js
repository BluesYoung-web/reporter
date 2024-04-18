// src/index.ts
import { getFingerprint, md5 } from "@bluesyoung/utils";
import { useHttp } from "@bluesyoung/http";
import UAParser from "ua-parser-js";
import consola from "consola";
var YoungReporter = class {
  #device_id = "";
  #account_id = "";
  #logger;
  #http;
  #timer;
  constructor(config) {
    const {
      serverUrl,
      appname,
      appsecret,
      debug = false,
      initDeviceId = true
    } = config;
    this.#logger = consola.create({
      level: debug ? void 0 : -1
    }).withTag("YoungReporter");
    initDeviceId && this.setDeviceId();
    this.#logger.info("init", config);
    this.#http = useHttp({
      lazyBaseURL: () => serverUrl,
      timeout: -1,
      loading: {
        start: () => this.#logger.info("...start req..."),
        end: () => this.#logger.info("...end req...")
      },
      checkFn: (res) => {
        this.#logger.success("response: ", res);
        return res;
      },
      fail: (err) => {
        this.#logger.error("request error: ", err);
      },
      headers: {
        getCommonHeaders: () => {
          const t = Math.floor(Date.now() / 1e3).toString();
          const sign = md5(`${appsecret}${t}`).toLowerCase();
          this.#logger.log("t: ", t, "sign: ", sign, "appname: ", appname);
          return {
            t,
            sign: md5(`${appsecret}${t}`).toLowerCase(),
            appname
          };
        }
      }
    });
  }
  /**
   * 配置设备标识
   * @param id 不传则默认使用 canvas 生成浏览器指纹，非浏览器环境中会报错
   */
  setDeviceId(id) {
    this.#device_id = id || getFingerprint();
  }
  #mergeProps(props, type = "track") {
    const ua = navigator.userAgent;
    return {
      "#type": type,
      "#device_id": this.#device_id,
      "#account_id": this.#account_id,
      "#flush_time": Date.now(),
      "#ua": UAParser(ua),
      "#sdk_version": __VERSION__,
      "properties": props
    };
  }
  /**
   * 设置用户标识
   * @param id 用户标识
   */
  login(id) {
    this.#account_id = id;
  }
  /**
   * 清除用户标识
   */
  logout() {
    this.#account_id = "";
  }
  /**
   * 单次上报
   * @param event_id 事件 id
   * @param args 其他参数对象
   */
  track(event_id, args = {}) {
    const trackArgs = this.#mergeProps(args, "track");
    this.#logger.info("event_id: ", event_id, "track: ", trackArgs);
    this.#http.authReq({
      url: "/api/report",
      data: {
        event_id,
        ...trackArgs
      }
    });
  }
  /**
   * 定时上报（单位 s）
   * @param fn 获取/设置上次上报时间
   * @param fn.get 获取
   * @param fn.set 设置
   * @param cbk 上报回调函数
   * @param timeGap 上报间隔时间
   */
  flush(fn, cbk, timeGap = 60) {
    this.#timer && clearInterval(this.#timer);
    const intervalFn = () => {
      const LAST_ONLINE_REPORT_TIME = fn.get();
      const now = Math.floor(Date.now() / 1e3);
      if (LAST_ONLINE_REPORT_TIME && now - LAST_ONLINE_REPORT_TIME < timeGap) {
        this.#logger.warn("flush report fail, time to short, real-gap: %ss, need-gap: %ss", now - LAST_ONLINE_REPORT_TIME, timeGap);
      } else {
        fn.set(now);
        cbk();
        this.#logger.log("flush report", now);
      }
    };
    intervalFn();
    this.#timer = setInterval(intervalFn, timeGap / 6 * 1e3);
  }
};
export {
  YoungReporter as default
};
