import React from 'react'
import PriceOne from './price_one'
import PriceTwo from './price_two'
import PriceThree from './price_three'
import PriceFour from './price_four'

const BaclinkPriceTable = () => {
    return (
        <div className="container mx-auto p-[38px]">
            <div className="grid grid-rows-2 items-center my-10 md:my-20">
                <h2 className="text-center text-2xl md:text-4xl underline underline-offset-8 decoration-yellow-400">Backlinks收費參考</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
                <PriceOne />
                <PriceTwo />
                <PriceThree />
                <PriceFour />
            </div>
        </div>
    )
}

export default BaclinkPriceTable;