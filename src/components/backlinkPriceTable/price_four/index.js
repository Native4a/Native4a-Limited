import React from 'react'
import { useTranslation } from 'react-i18next'
import CheckIcon from '../../icon/check'
import WhatsApp from '../../button/whatsapp'


const PriceFour = () => {
    const { t } = useTranslation()
    
    const features = [
        t('pricing.pricingFour.feature1'),
        t('pricing.pricingFour.feature2'),
        t('pricing.pricingFour.feature3'),
        t('pricing.pricingFour.feature4'),
        t('pricing.pricingFour.feature5'),
        t('pricing.pricingFour.feature6'),
        t('pricing.pricingFour.feature7'),
        t('pricing.pricingFour.feature8'),
        t('pricing.pricingFour.feature9'),
        t('pricing.pricingFour.feature10'),
        t('pricing.pricingFour.feature11'),
        t('pricing.pricingFour.feature12'),
    ]

    return (
        <div className="grid gap-6 text-4xl border rounded-xl bg-white pb-10">
            <div className="bg-[#133F7B] text-center py-4 text-white rounded-t-lg">
                <h2>{t('pricing.pricingFour.title')}</h2>
            </div>
            <div className="text-center mt-5">
                <span className="relative bottom-6 text-base text-neutral-800">HKD</span>
                <span className="text-5xl font-semibold text-neutral-800">{t('pricing.pricingFour.price')}</span>
                <span className="text-base text-neutral-800">/One-Off</span>
            </div>
            <div className="px-5">
                {features.map((feature, index) => (
                    <ul key={index} className="w-full rounded-lg">
                        <li>
                            <div className="w-fill flex pl-3 rounded-lg pb-1">
                                <CheckIcon />
                                <p className="ml-2 text-base underline underline-offset-8 pb-1 decoration-gray-300" title={feature}>{feature}</p>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
            <center>
                <WhatsApp />
            </center>
        </div>
    )
}

export default PriceFour
