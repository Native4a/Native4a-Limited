import React from 'react'
import useEngBacklinksEvaluation from '../../../hook/useEngBacklinksEvaluation'

const EngBacklinksEvaluation = ({className1,className2}) => {
  const beql = useEngBacklinksEvaluation();
  const cn1='flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#3A7DFF]'
  const cn2='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'
  return (
      <div className="row-span-4 flex justify-center order-2 lg:order-3">
        <div className="grid grid-rows-6 grid-flow-col gap-4 m-10 md:m-0">
          <div className={className1 ? className1 : cn1}>來自英文外部連結網站</div>
          {beql.map((item, index) => {
            const {
              descriptions
            } = item;
            return (
              <div className={className2 ? className2 : cn2} key={index}><p>{descriptions}</p></div>
            );
          })}
        </div>
      </div>
  );
}

export default EngBacklinksEvaluation