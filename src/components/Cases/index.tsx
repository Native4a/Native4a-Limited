import React from 'react'
import Link from 'next/link'
import useAddCases from '../../hook/useAddCases'

interface CaseItem {
  title: string
  description: string
  url: string
  image: {
    url: string
  }
}

const AddCases: React.FC = () => {
  const cases: CaseItem[] = useAddCases()
  return (
    <div className='contents'>
      <ul className='rounded-3xl bg-white pt-16 pb-5 contents'>
        {cases.map((item, index) => {
          const {
            title,
            description,
            url,
            image
          } = item
          return (
            <div role="navigation" className="p-2 my-4" aria-label="Main" key={index}>
                <Link href={url}>
                    <img src={image.url} alt="" width={500} height={600} className="rounded-sm py-4 drop-shadow-md" />
                </Link>
                <h4 className='text-amber-500 text-xl text-center p-2'>{title}</h4>
                <p className='text-center'>{description}</p>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default AddCases
