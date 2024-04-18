# @bluesyoung/reporter

[![](https://img.shields.io/badge/Author-BluesYoung--web-blue)](https://gitee.com/BluesYoung-web)

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

数据上报 SDK

```ts
import YoungReporter from '@bluesyoung/reporter'

const reporter = new YoungReporter({
  serverUrl: '上报服务器的地址',
  appname: 'your appname',
  appsecret: 'your appsecret',
  // 是否打印中间过程日志
  debug: true,
})

// 登录(设置用户id, 非必须)
reporter.login('userId')
// 退出登录
reporter.logout()

// 事件上报
reporter.track('eventName', {
  // 事件属性
  eventProps: {
    // ...
  },
})
```
