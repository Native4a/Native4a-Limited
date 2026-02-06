import React from 'react'
import { getOptimizedContentfulImage, generateSrcSet, getResponsiveSizes } from '../utils/imageOptimizer'

interface OptimizedImageProps {
  src: string
  alt: string
  title?: string
  className?: string
  width?: number
  height?: number
  quality?: number
  loading?: 'lazy' | 'eager'
  decoding?: 'sync' | 'async' | 'auto'
  isAboveTheFold?: boolean
  sizes?: string
  role?: string
  ariaLabel?: string
}

/**
 * Optimized Image Component
 * Handles lazy loading, responsive sizes, and format optimization
 * Supports accessibility features and modern image formats
 */
const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      title,
      className = '',
      width,
      height,
      quality = 75,
      loading = 'lazy',
      decoding = 'async',
      isAboveTheFold = false,
      sizes,
      role,
      ariaLabel,
    },
    ref
  ) => {
    if (!src) return null

    const optimizedSrc = getOptimizedContentfulImage(src, {
      quality,
      width,
      height,
      format: 'webp',
    })

    const srcSet = generateSrcSet(src, [320, 640, 1024, 1440])
    const responsiveSizes = sizes || getResponsiveSizes()
    const loadingStrategy = isAboveTheFold ? 'eager' : loading

    return (
      <picture>
        <source srcSet={srcSet} type="image/webp" sizes={responsiveSizes} />
        <source
          srcSet={generateSrcSet(src, [320, 640, 1024, 1440]).replace('webp', 'jpg')}
          type="image/jpeg"
          sizes={responsiveSizes}
        />
        <img
          ref={ref}
          src={optimizedSrc}
          alt={alt}
          title={title || alt}
          className={className}
          width={width}
          height={height}
          loading={loadingStrategy}
          decoding={decoding}
          role={role}
          aria-label={ariaLabel || alt}
        />
      </picture>
    )
  }
)

OptimizedImage.displayName = 'OptimizedImage'

export default OptimizedImage
