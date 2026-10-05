import React from 'react'
import { Link } from 'gatsby'
import { ArrowRight } from 'lucide-react'

export function GeoCrossLink() {
  return (
    <section aria-labelledby="geo-cross-link-title" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-gray-900 p-6 md:p-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-[#faab00]">新服務：GEO 生成式引擎優化</p>
            <h2 id="geo-cross-link-title" className="text-2xl font-black text-white text-balance">
              想你的品牌出現在 ChatGPT、Google AI Overview 的答案中？
            </h2>
          </div>
          <Link
            to="/zh/geo/"
            className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full bg-[#faab00] px-6 py-3 font-bold text-gray-900 transition-colors hover:bg-[#e3a008]"
          >
            了解香港 GEO 服務
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
