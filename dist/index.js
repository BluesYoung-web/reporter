// src/index.ts
import { getFingerprint, md5 } from "@bluesyoung/utils";
import { useHttp } from "@bluesyoung/http";
import UAParser from "ua-parser-js";
import consola from "consola";
var YoungReporter = class {
  #device_id = getFingerprint();
  #account_id = "";
  logger;
  http;
  constructor(config) {
    const {
      serverUrl,
      appname,
      appsecret,
      debug = false
    } = config;
    this.logger = consola.create({
      level: debug ? void 0 : -1
    }).withTag("YoungReporter");
    this.logger.info("init", config);
    this.http = useHttp({
      lazyBaseURL: () => serverUrl,
      timeout: -1,
      loading: {
        start: () => this.logger.info("...start req..."),
        end: () => this.logger.info("...end req...")
      },
      checkFn: (res) => {
        this.logger.success("response: ", res);
        return res;
      },
      fail: (err) => {
        this.logger.error("request error: ", err);
      },
      headers: {
        getCommonHeaders: (req) => {
          this.logger.log("url: ", req.url);
          const t = Math.floor(Date.now() / 1e3).toString();
          return {
            t,
            sign: md5(`${appsecret}${t}`).toLowerCase(),
            appname
          };
        }
      }
    });
  }
  mergeProps(props, type = "track") {
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
  login(id) {
    this.#account_id = id;
  }
  logout() {
    this.#account_id = "";
  }
  track(event_id, args) {
    const trackArgs = this.mergeProps(args, "track");
    this.logger.info("event_id: ", event_id, "track: ", trackArgs);
    this.http.authReq({
      url: "/api/report",
      data: {
        event_id,
        ...trackArgs
      }
    });
  }
};
export {
  YoungReporter as default
};
