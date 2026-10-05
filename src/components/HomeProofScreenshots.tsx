import React from 'react'

const appScreens = [
  {
    src: '/images/shifu-app-list.png',
    alt: '師傅App 獨家單清單',
    label: '獨家單清單',
  },
  {
    src: '/images/shifu-app-detail.png',
    alt: '師傅App 單詳情',
    label: '單詳情',
  },
]

export const HomeProofScreenshots: React.FC = () => (
  <div className="mx-auto grid w-full max-w-3xl grid-cols-2 items-start gap-4 sm:gap-8" aria-label="Native4a 師傅派單 App 手機畫面">
    {appScreens.map((screen) => (
      <figure key={screen.src} className="mx-auto w-full max-w-[17rem]">
        <div className="overflow-hidden rounded-[2rem] border-[0.45rem] border-slate-900 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-300">
          <img
            src={screen.src}
            alt={screen.alt}
            width="721"
            height="2016"
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">{screen.label}</figcaption>
      </figure>
    ))}
  </div>
)

export default HomeProofScreenshots
