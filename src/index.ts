/*
 * @Author: zhangyang
 * @Date: 2024-04-17 16:32:00
 * @LastEditTime: 2024-04-17 19:53:37
 * @Description:
 * @LastEditors: zhangyang
 */
import { getFingerprint, md5 } from '@bluesyoung/utils'
import { useHttp } from '@bluesyoung/http'
import UAParser from 'ua-parser-js'
import type { ConsolaInstance } from 'consola'
import consola from 'consola'

export interface ReporterConfig {
  /**
   * 上报服务器地址
   */
  serverUrl: string
  /**
   * 应用名称
   */
  appname: string
  /**
   * 应用密钥
   */
  appsecret: string

  debug?: boolean
}

export default class YoungReporter {
  #device_id = getFingerprint()
  #account_id = ''

  private logger: ConsolaInstance
  private http: ReturnType<typeof useHttp>

  constructor(config: ReporterConfig) {
    const {
      serverUrl,
      appname,
      appsecret,
      debug = false,
    } = config

    this.logger = consola.create({
      level: debug ? undefined : -1,
    }).withTag('YoungReporter')

    this.logger.info('init', config)

    this.http = useHttp({
      baseURL: serverUrl,
      timeout: -1,
      loading: {
        start: () => this.logger.info('...start req...'),
        end: () => this.logger.info('...end req...'),
      },
      checkFn: (res) => {
        this.logger.success('response: ', res)
        return res
      },
      fail: (err) => {
        this.logger.error('request error: ', err)
      },
      headers: {
        getCommonHeaders: () => {
          const t = Math.floor(Date.now() / 1000).toString()

          return {
            t,
            sign: md5(`${appsecret}${t}`).toLowerCase(),
            appname,
          }
        },
      },
    })
  }

  private mergeProps(props: Record<string, any>, type = 'track') {
    const ua = navigator.userAgent
    return {
      '#type': type,
      '#device_id': this.#device_id,
      '#account_id': this.#account_id,
      '#flush_time': Date.now(),
      '#ua': ua,
      '#ua_parser': UAParser(ua),
      '#sdk_version': __VERSION__,
      'properties': props,
    }
  }

  login(id: string) {
    this.#account_id = id
  }

  loginout() {
    this.#account_id = ''
  }

  track(event_id: string, args: Record<string, any>) {
    const trackArgs = this.mergeProps(args, 'track')
    this.logger.info('event_id: ', event_id, 'track: ', trackArgs)
    this.http.authReq({
      url: '/api/report',
      data: {
        event_id,
        ...trackArgs,
      },
    })
  }
}
