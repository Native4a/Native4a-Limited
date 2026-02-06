/**
 * Performance Monitoring and Analytics
 * Tracks Core Web Vitals and custom performance metrics
 */

interface PerformanceMetric {
  name: string
  value: number
  unit: string
  timestamp: number
}

interface WebVitalsMetrics {
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay (deprecated, use INP)
  inp?: number // Interaction to Next Paint
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
}

/**
 * Initialize Web Vitals monitoring
 */
export const initializeWebVitalsMonitoring = (callback?: (metrics: PerformanceMetric) => void): void => {
  if (typeof window === 'undefined') return

  // Large Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (callback) {
        callback({
          name: 'LCP',
          value: entry.renderTime || entry.loadTime,
          unit: 'ms',
          timestamp: Date.now(),
        })
      }
    }
  })

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  } catch {
    // Browser may not support LCP
  }
}

/**
 * Get Core Web Vitals snapshot
 */
export const getCoreWebVitals = async (): Promise<WebVitalsMetrics> => {
  if (typeof window === 'undefined') return {}

  const metrics: WebVitalsMetrics = {}

  // Get Navigation Timing data
  const perfData = window.performance.timing
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
  metrics.ttfb = perfData.responseStart - perfData.navigationStart

  // Measure LCP
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint') as PerformanceEntry[]
  if (lcpEntries.length > 0) {
    metrics.lcp = Math.round((lcpEntries[lcpEntries.length - 1] as any).startTime)
  }

  // Measure CLS
  const clsEntries = performance.getEntriesByType('layout-shift') as PerformanceEntry[]
  if (clsEntries.length > 0) {
    metrics.cls = (clsEntries as any[]).reduce((sum, entry) => sum + (entry.hadRecentInput ? 0 : entry.value), 0)
  }

  // Measure FCP
  const fcpEntries = performance.getEntriesByType('paint')
  const fcp = fcpEntries.find((entry) => entry.name === 'first-contentful-paint')
  if (fcp) {
    metrics.fcp = Math.round(fcp.startTime)
  }

  return metrics
}

/**
 * Report metrics to analytics
 */
export const reportPerformanceMetrics = (
  metricName: string,
  value: number,
  analyticsId?: string
): void => {
  if (typeof window === 'undefined' || typeof gtag === 'undefined') return

  try {
    gtag('event', 'page_view', {
      event_category: 'Performance',
      event_label: metricName,
      value: Math.round(value),
      metric_id: analyticsId,
    })
  } catch {
    // Analytics not available
  }
}

/**
 * Measure function execution time
 */
export const measureExecutionTime = async <T>(
  fn: () => Promise<T> | T,
  label: string
): Promise<{ result: T; duration: number }> => {
  const start = performance.now()
  const result = await Promise.resolve(fn())
  const duration = performance.now() - start

  console.log(`[Performance] ${label}: ${duration.toFixed(2)}ms`)

  return { result, duration }
}

/**
 * Measure resource loading times
 */
export const getMeasuredResourceTimings = (): Array<{
  name: string
  duration: number
  size: number
}> => {
  if (typeof window === 'undefined') return []

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  return resources.map((resource) => ({
    name: resource.name,
    duration: Math.round(resource.duration),
    size: Math.round(resource.transferSize || 0),
  }))
}

/**
 * Performance Observer for monitoring various metrics
 */
export class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric[]> = new Map()

  constructor(private analyticsId?: string) {}

  recordMetric(name: string, value: number, unit: string = 'ms'): void {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
    }

    if (!this.metrics.has(name)) {
      this.metrics.set(name, [])
    }

    this.metrics.get(name)!.push(metric)
    reportPerformanceMetrics(name, value, this.analyticsId)
  }

  getMetric(name: string): PerformanceMetric | undefined {
    const metrics = this.metrics.get(name)
    return metrics?.[metrics.length - 1]
  }

  getAllMetrics(): Record<string, PerformanceMetric[]> {
    return Object.fromEntries(this.metrics)
  }

  clearMetrics(name?: string): void {
    if (name) {
      this.metrics.delete(name)
    } else {
      this.metrics.clear()
    }
  }

  generateReport(): string {
    let report = 'Performance Report\n'
    report += '==================\n\n'

    for (const [name, metrics] of this.metrics) {
      const avgValue = metrics.reduce((sum, m) => sum + m.value, 0) / metrics.length
      report += `${name}: ${avgValue.toFixed(2)} ${metrics[0]?.unit}\n`
    }

    return report
  }
}

/**
 * Cache manager with localStorage/sessionStorage
 */
export class CacheManager {
  private storage: Storage

  constructor(useSessionStorage: boolean = false) {
    this.storage = useSessionStorage ? window.sessionStorage : window.localStorage
  }

  set(key: string, value: unknown, expiryMinutes?: number): void {
    const item = {
      value,
      timestamp: Date.now(),
      expiry: expiryMinutes ? Date.now() + expiryMinutes * 60 * 1000 : null,
    }

    this.storage.setItem(key, JSON.stringify(item))
  }

  get<T>(key: string): T | null {
    const item = this.storage.getItem(key)
    if (!item) return null

    try {
      const parsed = JSON.parse(item)

      // Check expiry
      if (parsed.expiry && parsed.expiry < Date.now()) {
        this.storage.removeItem(key)
        return null
      }

      return parsed.value as T
    } catch {
      return null
    }
  }

  remove(key: string): void {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }

  keys(): string[] {
    return Object.keys(this.storage)
  }
}
