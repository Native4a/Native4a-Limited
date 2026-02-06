import React, { useState } from 'react'

interface AccessibleHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  id?: string
  skipLink?: boolean
}

/**
 * Accessible Heading Component
 * Ensures proper semantic HTML and skip navigation support
 */
export const AccessibleHeading: React.FC<AccessibleHeadingProps> = ({
  level,
  children,
  className = '',
  id,
  skipLink = false,
}) => {
  const HeadingTag = `h${level}` as const
  const headingId = id || `heading-${Math.random().toString(36).substr(2, 9)}`

  return (
    <>
      {skipLink && level === 1 && (
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-yellow-400"
        >
          Skip to main content
        </a>
      )}
      <HeadingTag className={className} id={headingId}>
        {children}
      </HeadingTag>
    </>
  )
}

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string
  ariaExpanded?: boolean
  ariaControls?: string
  ariaPressed?: boolean
  loading?: boolean
  loadingText?: string
}

/**
 * Accessible Button Component
 * Supports loading states, ARIA attributes, and keyboard navigation
 */
export const AccessibleButton = React.forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      children,
      ariaLabel,
      ariaExpanded,
      ariaControls,
      ariaPressed,
      loading = false,
      loadingText = 'Loading...',
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        aria-pressed={ariaPressed}
        disabled={disabled || loading}
        className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${className}`}
        {...props}
      >
        {loading ? loadingText : children}
      </button>
    )
  }
)

AccessibleButton.displayName = 'AccessibleButton'

interface AccessibleFormFieldProps {
  label: string
  inputId: string
  error?: string
  required?: boolean
  helperText?: string
  children: React.ReactNode
}

/**
 * Accessible Form Field Wrapper
 * Ensures proper labeling, error messaging, and ARIA attributes
 */
export const AccessibleFormField: React.FC<AccessibleFormFieldProps> = ({
  label,
  inputId,
  error,
  required,
  helperText,
  children,
}) => {
  const describedBy = [error ? `${inputId}-error` : null, helperText ? `${inputId}-help` : null]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-group">
      <label htmlFor={inputId} className="block text-sm font-medium mb-2">
        {label}
        {required && <span aria-label="required" className="text-red-500 ml-1">*</span>}
      </label>
      <div aria-describedby={describedBy || undefined}>
        {children}
      </div>
      {error && (
        <div id={`${inputId}-error`} className="text-red-500 text-sm mt-1" role="alert">
          {error}
        </div>
      )}
      {helperText && (
        <div id={`${inputId}-help`} className="text-gray-500 text-sm mt-1">
          {helperText}
        </div>
      )}
    </div>
  )
}

interface AccessibleModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

/**
 * Accessible Modal Component
 * Implements proper ARIA roles and keyboard navigation
 */
export const AccessibleModal: React.FC<AccessibleModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  const [modalId] = useState(() => `modal-${Math.random().toString(36).substr(2, 9)}`)
  const titleId = `${modalId}-title`

  React.useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      />
      <div
        id={modalId}
        className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
          <h2 id={titleId} className="text-2xl font-bold mb-4">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </>
  )
}

interface AccessibleSkipLinksProps {
  links: Array<{ text: string; href: string }>
}

/**
 * Skip Links Component
 * Allows keyboard users to skip to main content areas
 */
export const AccessibleSkipLinks: React.FC<AccessibleSkipLinksProps> = ({ links }) => {
  return (
    <nav className="sr-only">
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="focus:not-sr-only focus:block focus:p-2 focus:bg-yellow-400 focus:text-black focus:z-50"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
