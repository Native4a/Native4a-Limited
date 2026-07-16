import * as React from 'react';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Partner data collection based on the provided HTML capture.
 */
const PARTNERS = [{
  id: 'platinum-care',
  name: '鉑康 Logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/2JGJXjVu4mHwQIcbYBLvfN/a6ca2043d97d2f57202b8235cf4961b8/______LOGO.png'
}, {
  id: 'esey',
  name: 'Esey logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/76Sy3Fga6pmZdKv0xDkgMV/bc947469b05646858a5fc28542c160ea/esey_logo.png'
}, {
  id: 'accolade',
  name: 'Accolade original logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/7BDOyl5M3EiATZGLY99wnL/9911ee2eed4a0c9fc36753d24cd04a73/accolade_logo.png'
}, {
  id: 'lost',
  name: 'LOST logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/lNpYeQg2TWJeBSEYvViKW/89afb1c52df65ff77f75d9d53925e2fe/LOST_LOGO-c62130b7198f8860cc6eba3699127259.png'
}, {
  id: 'jaco',
  name: 'JACO logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/1kGfKHTh5F4RSgYil4Bxfe/47beb9ba83761ab8cb55f73f17934244/JACO_logo.png'
}, {
  id: 'refined-house',
  name: '雅居蚊網 Logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/2xnaK0ythhgp5dQWf7b3yu/c62c3b53c498749311451a1d494ad203/RefinedHouse_logo-f55e7f7a58a2f54b685a08ba6244ef40.jpg'
}, {
  id: 'health',
  name: 'health logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/6reGiKvh1EwwXZOmjl7VfR/dfb15c08063172e2ddd14a7ed9af4a15/health_logo.png'
}, {
  id: 'gas-expert',
  name: '煤氣達人 Logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/3BNnQY1xztgxOHk1mEE8tF/7ac68a1e273fc661627cb08036aa8098/_____________logo.png'
}, {
  id: 'bay247',
  name: 'bay247 logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/6gvmcco3ARogW5lJCHLpaR/6e22b65d06e54011a82f9a16456abe02/bay247_logo_2_.png'
}, {
  id: 'emmas',
  name: 'emmas logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/7dbFjigir12VFBKZufsAmL/1754466d4ce0f6fd3762676bc7818fbd/emmas_logo.png'
}, {
  id: 'lafayette',
  name: 'LAFAYETTE logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/01PMo9aqJaAtuhzMkUkikX/7cb5975c4f0f52f59edee67beeb55920/LAFAYETTE_logo.png'
}, {
  id: 'nora',
  name: 'NORA logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/4PcjZKtDzCSIPE3vkeNNDu/e77fd08a5428a839ce9b8753189f864d/NORA_logo.png'
}, {
  id: 'alessandro',
  name: 'alessandro logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/6KJKa3Wi8Y9piLWBNm0YSU/0e6e31a56bc5906964c337dff8e5c6f4/alessandro_logo.png'
}, {
  id: 'annetso',
  name: 'Annetso Shop logo',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/70WOLZM10xYmqVWXdsAKte/7d15b7336e79500125674e86edc49c21/Annetso_Shop_logo.png'
}];
export const PartnerSection: React.FC = () => {
  return <section className="bg-white py-12 md:py-24 w-full">
      <div className="max-w-[1520px] mx-auto px-6 md:px-9">
        {/* Mobile Title View */}
        <div className="md:hidden mb-8">
          <h2 className="flex items-center text-2xl font-bold text-slate-900 ml-2">
            <span className="text-[#faab00] text-3xl mr-3">
              <Square fill="currentColor" strokeWidth={0} size="1em" />
            </span>
            <b className="font-black">更多合作客戶</b>
          </h2>
        </div>

        {/* Desktop Title View */}
        <div className="hidden md:block mb-16">
          <h2 className="flex justify-center items-center text-[50px] font-semibold text-slate-900 underline decoration-[#e3a008] underline-offset-[21px] decoration-4">
            <span className="text-[#faab00] text-3xl mr-3">
              <Square fill="currentColor" strokeWidth={0} size="1em" />
            </span>
            <b className="font-black">更多合作客戶</b>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
            {PARTNERS.map(partner => <div key={partner.id} className="w-full flex items-center justify-center p-2 md:p-11 h-full min-h-[140px]">
                <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" className="rounded-sm max-w-full h-auto object-contain max-h-[160px] md:max-h-[220px]" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};