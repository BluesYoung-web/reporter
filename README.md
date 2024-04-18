# @bluesyoung/reporter

[![](https://img.shields.io/badge/Author-BluesYoung--web-blue)](https://gitee.com/BluesYoung-web)  [![npm](https://img.shields.io/npm/v/@bluesyoung/reporter)](https://www.npmjs.com/package/@bluesyoung/reporter)

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

数据上报 SDK

## 使用示例

```ts
import YoungReporter from '@bluesyoung/reporter'

const reporter = new YoungReporter({
  serverUrl: '上报服务器的地址',
  appname: 'your appname',
  appsecret: 'your appsecret',
  // 是否打印中间过程日志，默认为 false
  // 生产环境建议关闭
  debug: true,
  // 是否立即初始化 deviceId
  // (纯浏览器环境，无需传递，默认为 true，自动使用 canvas 生成浏览器指纹)
  initDeviceId: false
})

// 设置设备id，不传递则使用 canvas 生成浏览器指纹
reporter.setDeviceId()

// 登录(设置用户id, 非必须)
reporter.login('userId')
// 退出登录
reporter.logout()

// 事件上报
reporter.track('eventName', {
  // 事件属性
  // [prop: string]: any
})

// 定时上报
reporter.flush(args)
```

[详细示例，参见测试代码](./test/index.spec.ts)
