/**
 * Image Optimization Utilities
 * Provides helper functions for optimizing image loading and delivery
 */

interface ImageOptimizationOptions {
  quality?: number
  width?: number
  height?: number
  format?: 'webp' | 'jpg' | 'png' | 'avif'
  loading?: 'lazy' | 'eager'
  decoding?: 'sync' | 'async' | 'auto'
}

/**
 * Generates optimized Contentful image URL with query parameters
 * @param url - Original Contentful image URL
 * @param options - Optimization options
 * @returns Optimized image URL
 */
export const getOptimizedContentfulImage = (
  url: string,
  options: ImageOptimizationOptions = {}
): string => {
  if (!url) return ''

  const {
    quality = 75,
    width,
    height,
    format = 'webp',
  } = options

  try {
    const imageUrl = new URL(url)
    
    if (width) imageUrl.searchParams.set('w', width.toString())
    if (height) imageUrl.searchParams.set('h', height.toString())
    imageUrl.searchParams.set('q', quality.toString())
    imageUrl.searchParams.set('fm', format)
    
    return imageUrl.toString()
  } catch {
    return url
  }
}

/**
 * Generates srcset for responsive images
 * @param url - Original image URL
 * @param sizes - Array of widths to generate
 * @returns srcset string
 */
export const generateSrcSet = (
  url: string,
  sizes: number[] = [320, 640, 1024, 1440]
): string => {
  return sizes
    .map((size) => {
      const optimized = getOptimizedContentfulImage(url, { width: size })
      return `${optimized} ${size}w`
    })
    .join(', ')
}

/**
 * Gets appropriate loading strategy based on image position
 * @param isAboveTheFold - Whether image is visible on initial load
 * @returns loading attribute value
 */
export const getLoadingStrategy = (isAboveTheFold: boolean): 'lazy' | 'eager' => {
  return isAboveTheFold ? 'eager' : 'lazy'
}

/**
 * Gets responsive image sizes string for srcset
 * @returns sizes attribute value
 */
export const getResponsiveSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1440px) 80vw, 1200px'
}

/**
 * Generates picture element markup for modern image formats with fallback
 */
export const generatePictureMarkup = (
  url: string,
  alt: string,
  className?: string
): string => {
  const webpUrl = getOptimizedContentfulImage(url, { format: 'webp', quality: 75 })
  const jpgUrl = getOptimizedContentfulImage(url, { format: 'jpg', quality: 75 })
  const srcSet = generateSrcSet(url)

  return `
    <picture>
      <source srcset="${srcSet}" type="image/webp" sizes="${getResponsiveSizes()}">
      <img 
        src="${jpgUrl}" 
        alt="${alt}" 
        class="${className || ''}"
        loading="lazy"
        decoding="async"
      />
    </picture>
  `
}
