import React from 'react'
import useChiBacklinksEvaluation from '../../../hook/useChiBacklinksEvaluation'

const ChiBacklinksEvaluation = ({ className1, className2 }) => {
  const beql = useChiBacklinksEvaluation()
  const cn1 =
    'flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#FAAB00]'
  const cn2 =
    'flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'

  // Flatten descriptions from all pages and sort by order
  const descriptions = beql
    .flatMap((item) => item.chiEvaluationDescription || [])
    .sort((a, b) => a.order - b.order)

  return (
    <div className="row-span-4 flex justify-center order-4 lg:order-5">
      <div className="grid grid-rows-6 grid-flow-col gap-4 m-10 md:m-0">
        <div className={className1 ? className1 : cn1}>
          來自中文外部連結網站
        </div>
        {descriptions.map((desc, index) => (
          <div className={className2 ? className2 : cn2} key={index}>
            <p>{desc.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChiBacklinksEvaluation
