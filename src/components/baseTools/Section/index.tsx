import React from 'react'

interface SectionProps {
  children?: React.ReactNode
  SectionClass?: string
  ContainerClass?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  SectionClass,
  ContainerClass,
}) => {
  const section = 'bg-cover'
  const container =
    'flex items-center m-auto w-[95%] md:w-[90%] lg:w-[92%] xl:w-[90%] 2xl:w-[79%]'

  return (
    <section className={SectionClass ? SectionClass : section}>
      <div className={ContainerClass ? ContainerClass : container}>
        {children}
      </div>
    </section>
  )
}

export default Section
