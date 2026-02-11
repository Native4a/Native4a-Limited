import React from 'react'
import { useTranslation } from 'react-i18next'
import CheckIcon from '../../icon/check'
import WhatsApp from '../../button/whatsapp'


const PriceTwo = () => {
    const { t } = useTranslation()
    
    const features = [
        t('pricing.pricingTwo.feature1'),
        t('pricing.pricingTwo.feature2'),
        t('pricing.pricingTwo.feature3'),
        t('pricing.pricingTwo.feature4'),
        t('pricing.pricingTwo.feature5'),
        t('pricing.pricingTwo.feature6'),
        t('pricing.pricingTwo.feature7'),
        t('pricing.pricingTwo.feature8'),
        t('pricing.pricingTwo.feature9'),
        t('pricing.pricingTwo.feature10'),
        t('pricing.pricingTwo.feature11'),
        t('pricing.pricingTwo.feature12'),
    ]

    return (
        <div className="grid gap-6 text-4xl border rounded-xl bg-white pb-10">
            <div className="bg-green-600 text-center py-4 text-white rounded-t-lg">
                <h2>{t('pricing.pricingTwo.title')}</h2>
            </div>
            <div className="text-center mt-5">
                <span className="relative bottom-6 text-base text-neutral-800">HKD</span>
                <span className="text-5xl font-semibold text-neutral-800">{t('pricing.pricingTwo.price')}</span>
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

export default PriceTwo
