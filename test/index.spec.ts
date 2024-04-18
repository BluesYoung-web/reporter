/*
 * @Author: zhangyang
 * @Date: 2024-04-18 16:34:35
 * @LastEditTime: 2024-04-18 16:55:04
 * @Description:
 * @LastEditors: zhangyang
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import YoungReporter from '../src'

describe('young reporter sdk', () => {
  const reporter = new YoungReporter({
    serverUrl: 'https://example.com',
    appname: 'appname',
    appsecret: 'xxxxyyyyddkdfjglksd',
    initDeviceId: false,
    debug: true,
  })

  it('should work', () => {
    expect(reporter).toBeDefined()
  })

  it('track', () => {
    expect(reporter.track('test')).toBeUndefined()
  })

  describe('flush', () => {
    beforeEach(() => {
      localStorage.clear()
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('immdiate call', () => {
      const mockCbk = vi.fn()
      reporter.flush({
        get: () => +(localStorage.getItem('xxx') || 0),
        set: v => localStorage.setItem('xxx', v.toString()),
      }, mockCbk)
      expect(mockCbk).toBeCalledTimes(1)
    })

    it('timer call', () => {
      const mockCbk = vi.fn()
      reporter.flush({
        get: () => +(localStorage.getItem('xxx') || 0),
        set: v => localStorage.setItem('xxx', v.toString()),
      }, mockCbk)

      expect(mockCbk).toBeCalledTimes(1)
      vi.advanceTimersByTime(1e4)
      expect(mockCbk).toBeCalledTimes(1)
      vi.advanceTimersByTime(5e4)
      expect(mockCbk).toBeCalledTimes(2)
    })

    it('limit call', () => {
      const mockCbk = vi.fn()
      reporter.flush({
        get: () => +(localStorage.getItem('xxx') || 0),
        set: v => localStorage.setItem('xxx', v.toString()),
      }, mockCbk)

      expect(mockCbk).toBeCalledTimes(1)
      reporter.flush({
        get: () => +(localStorage.getItem('xxx') || 0),
        set: v => localStorage.setItem('xxx', v.toString()),
      }, mockCbk)
      expect(mockCbk).toBeCalledTimes(1)
      vi.advanceTimersByTime(6e4)
      expect(mockCbk).toBeCalledTimes(2)
    })

    it('set timeGap', () => {
      const mockCbk = vi.fn()
      reporter.flush({
        get: () => +(localStorage.getItem('xxx') || 0),
        set: v => localStorage.setItem('xxx', v.toString()),
      }, mockCbk, 120)

      expect(mockCbk).toBeCalledTimes(1)
      vi.advanceTimersByTime(6e4)
      expect(mockCbk).toBeCalledTimes(1)
      vi.advanceTimersByTime(6e4)
      expect(mockCbk).toBeCalledTimes(2)
    })
  })
})
