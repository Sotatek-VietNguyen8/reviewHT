import React from 'react'
import hatinhImage from '/image/hatinh.jpg'
const CardBoard = () => {

  return (
    <section className='relative h-[500px] flex items-center justify-center text-center overflow-hidden'>
      <img
        src= {hatinhImage}
        alt='Ha Tinh landscape'
        className='absolute inset-0 w-full h-full object-cover brightness-75 z-0'      
      />
      <div className='relative z-10 container px-4 text-white'>
        <h1 className='text-4xl md:text-6xl font-serif mb-4 drop-shadow-md'>
          HÀ TĨNH
        </h1>
        <p className='text-xl md:text-2xl mb-8 drop-shadow-md'>
          VÙNG ĐẤT ĐỊA LINH NHÂN KIỆT
        </p>
      </div>
    </section>
    
  )
}

export default CardBoard