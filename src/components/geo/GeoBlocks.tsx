import React from 'react'
import { MessageCircle, Phone, Check, Info } from 'lucide-react'
import { GeoRichText } from './GeoRichText'
import { TEL_URL, WHATSAPP_GEO_URL } from '../../data/geoPage'

export function GeoSection({
  id,
  title,
  children,
  muted = false,
}: {
  id: string
  title: string
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-12 md:py-16 ${muted ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 text-balance">
          {title}
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-[#faab00]" aria-hidden="true" />
        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-gray-700">
          {children}
        </div>
      </div>
    </section>
  )
}

export function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-pretty">
      <GeoRichText text={text} />
    </p>
  )
}

export function Callout({ text }: { text: string }) {
  return (
    <aside className="flex gap-3 rounded-2xl bg-yellow-50 border border-yellow-200 p-5">
      <Info className="w-5 h-5 shrink-0 mt-1 text-yellow-700" aria-hidden="true" />
      <p className="text-pretty">
        <GeoRichText text={text} />
      </p>
    </aside>
  )
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#faab00]">
            <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          </span>
          <span className="text-pretty">
            <GeoRichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

export function DataTable({
  head,
  rows,
  caption,
}: {
  head: readonly string[]
  rows: readonly (readonly string[])[]
  caption?: string
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm md:text-base">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-gray-900 text-white">
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col" className="px-4 py-3 font-bold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row[0]} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-4 py-3 font-bold text-gray-900 align-top">
                    <GeoRichText text={cell} />
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3 align-top">
                    <GeoRichText text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={WHATSAPP_GEO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10b981] px-6 py-3.5 font-bold text-white shadow-sm transition-colors hover:bg-[#059669]"
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      {label}
    </a>
  )
}

export function PhoneButton({ label }: { label: string }) {
  return (
    <a
      href={TEL_URL}
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 px-6 py-3 font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
    >
      <Phone className="w-5 h-5" aria-hidden="true" />
      {label}
    </a>
  )
}
