/**
 * Performance and Caching Constants
 * Centralized constants for performance optimization
 */

// Cache control headers
export const CACHE_CONTROL = {
  STATIC_ASSETS: 'public, max-age=31536000, immutable', // 1 year
  STATIC_HTML: 'public, max-age=3600, s-maxage=86400', // 1 hour, 1 day on CDN
  DYNAMIC_CONTENT: 'public, max-age=300, s-maxage=3600', // 5 mins, 1 hour on CDN
  NO_CACHE: 'public, must-revalidate, max-age=0',
} as const

// Performance budgets (in milliseconds)
export const PERFORMANCE_BUDGETS = {
  FIRST_CONTENTFUL_PAINT: 1800,
  LARGEST_CONTENTFUL_PAINT: 2500,
  CUMULATIVE_LAYOUT_SHIFT: 0.1,
  FIRST_INPUT_DELAY: 100,
  TIME_TO_INTERACTIVE: 3800,
} as const

// Image optimization sizes
export const IMAGE_SIZES = {
  THUMBNAIL: 200,
  SMALL: 400,
  MEDIUM: 800,
  LARGE: 1200,
  XLARGE: 1600,
  FULL_WIDTH: 2000,
} as const

// Lazy loading thresholds
export const LAZY_LOADING = {
  THRESHOLD: '50px',
  ROOT_MARGIN: '50px',
  PRELOAD_DISTANCE: '1000px',
} as const

// API timeouts (in milliseconds)
export const API_TIMEOUTS = {
  SHORT: 3000,
  MEDIUM: 8000,
  LONG: 15000,
} as const

// Common z-index layers (organized by stacking context)
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED_NAV: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const

// Breakpoints for responsive design
export const BREAKPOINTS = {
  XS: 0,
  SM: 640,
  MD: 1024,
  LG: 1440,
  XL: 1920,
  XXL: 2560,
} as const

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 800,
} as const

// Transition easing functions
export const EASING = {
  LINEAR: 'linear',
  EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const
