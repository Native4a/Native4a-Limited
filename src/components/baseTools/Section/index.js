import React from 'react'

const Button = ({ children, SectionClass, ContainerClass }) => {
  //使用 TailwindCss 預設 class style
  const section = 'bg-cover'
  const container =
    'flex items-center m-auto w-[95%] md:w-[90%] lg:w-[92%] xl:w-[90%] 2xl:w-[79%]'

  return (
    <section className={SectionClass ? SectionClass : section}>
      {/**如果 className 變數存在（非空或非假值），就將其值指派給 className 屬性；否則，將 container 指派給 className 屬性。**/}
      <div className={ContainerClass ? ContainerClass : container}>
        {children}
      </div>
    </section>
  )
}

export default Button
