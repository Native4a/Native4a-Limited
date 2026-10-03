import React from 'react'
import { Link } from 'gatsby'
import { Check } from 'lucide-react'

const TOKEN = /(\*\*[^*]+\*\*|【待補[^】]*】|\[[^\]]+\]\([^)]+\)|✅)/g

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-200 text-gray-900 rounded px-1 py-0.5 font-medium [box-decoration-break:clone]">
      {children}
    </mark>
  )
}

function renderToken(token: string, key: number): React.ReactNode {
  if (token === '✅') {
    return (
      <Check
        key={key}
        aria-label="包括"
        className="inline-block w-5 h-5 text-emerald-600 align-text-bottom"
      />
    )
  }
  if (token.startsWith('**')) {
    return (
      <strong key={key} className="font-bold text-gray-900">
        <GeoRichText text={token.slice(2, -2)} />
      </strong>
    )
  }
  if (token.startsWith('【待補')) {
    return <Placeholder key={key}>{token}</Placeholder>
  }
  const match = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
  if (match) {
    const [, label, href] = match
    const className =
      'text-yellow-700 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-800 break-all'
    if (href.startsWith('/')) {
      return (
        <Link key={key} to={href} className={className}>
          {label}
        </Link>
      )
    }
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    )
  }
  return token
}

export function GeoRichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean)
  return <>{parts.map((part, i) => (part.match(TOKEN) ? renderToken(part, i) : part))}</>
}
