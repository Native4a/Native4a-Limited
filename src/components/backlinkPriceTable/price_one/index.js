import React from 'react'
import CheckIcon from '../../icon/check'
import WhatsApp from '../../button/whatsapp'


const PriceOne = () => {
    return (
        <div className="grid gap-6 text-4xl border rounded-xl bg-white pb-10">
            <div className="bg-amber-400 text-center py-4 text-white rounded-t-lg">
                <h2>中競爭度行業</h2>
            </div>
            <div className="text-center mt-5">
                <span className="relative bottom-6 text-base text-neutral-800">HKD</span>
                <span className="text-5xl font-semibold text-neutral-800">5500</span>
                <span className="text-base text-neutral-800">/One-Off</span>
            </div>
            <div className="px-5">
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="50頂層外連至您的網站">50頂層外連至您的網站</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="50個獨立中文網站">50個獨立中文網站</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="全繁中WP博客文章">全繁中WP博客文章</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="客戶行業相關內容文章">客戶行業相關內容文章</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="可做多個關鍵字和連結">可做多個關鍵字和連結</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="每篇文章及連結祗屬一個客戶">每篇文章及連結祗屬一個客戶</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="自家網站，不會消失，長期有效">自家網站，不會消失，長期有效</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="金字塔式結構">金字塔式結構</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="DA50+ 或 DR 30+">DA50+ 或 DR 30+</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="自選目標頁面">自選目標頁面</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="90% DoFollow, 10% NoFollow">90% DoFollow, 10% NoFollow</p>
                        </div>
                    </li>
                </ul>
                <ul className="w-full rounded-lg">
                    <li>
                        <div href="#" className="w-fill flex pl-3 rounded-lg pb-1">
                            <CheckIcon />
                            <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title="每篇文章及連結的完整報告">每篇文章及連結的完整報告</p>
                        </div>
                    </li>
                </ul>
            </div>
            <center>
                <WhatsApp/>
            </center>
        </div>
    )
}

export default PriceOne