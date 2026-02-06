/**
 * Accessibility Utilities
 * Helper functions for improving web accessibility (WCAG standards)
 */

/**
 * Skip to main content link - helps keyboard users navigate
 */
export const skipToMainContent = (): void => {
  const mainContent = document.getElementById('main-content')
  if (mainContent) {
    mainContent.focus()
    mainContent.scrollIntoView()
  }
}

/**
 * Manage keyboard navigation for modals and dropdowns
 */
export const createKeyboardTrap = (element: HTMLElement, escapeCallback?: () => void): void => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  element.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && escapeCallback) {
      escapeCallback()
    }

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  })
}

/**
 * Announce dynamic content changes to screen readers
 */
export const announceToScreenReaders = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message

  document.body.appendChild(announcement)

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Generate unique ID for form labels and inputs
 */
export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Color contrast ratio checker (simple version)
 * Returns contrast ratio between 1:1 and 21:1
 */
export const getContrastRatio = (rgb1: string, rgb2: string): number => {
  const getLuminance = (rgb: string): number => {
    const values = rgb.match(/\d+/g) || []
    const [r, g, b] = values.map(Number)

    const luminance = (value: number): number => {
      const v = value / 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    }

    return 0.2126 * luminance(r) + 0.7152 * luminance(g) + 0.0722 * luminance(b)
  }

  const l1 = getLuminance(rgb1)
  const l2 = getLuminance(rgb2)

  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * WCAG compliance checker
 */
export const checkWCAGCompliance = (contrastRatio: number, fontSize: number): string => {
  const isLargeText = fontSize >= 18 || fontSize >= 14 && fontSize < 18 // 14pt bold is large
  const aa = isLargeText ? 3 : 4.5
  const aaa = isLargeText ? 4.5 : 7

  if (contrastRatio >= aaa) return 'AAA'
  if (contrastRatio >= aa) return 'AA'
  return 'Fail'
}
