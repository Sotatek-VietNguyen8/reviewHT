import React, { useState } from 'react'

const specialtiesData = [
    { id: 1, name: 'Kẹo Cu đơ', description: 'Kẹo được nấu từ mật mía, đường, mạch nha, gừng, đậu phộng làm nhân và được đổ vào hai miếng bánh tráng ép lại. Loại kẹo này rất dẻo và dính, có thể ăn không hoặc thưởng thức cùng với nước trà xanh.', image: '/image/keoCD.jpg' },
    { id: 2, name: 'Mực một nắng', description: 'Mực tươi phơi qua một nắng giữ độ ngọt, dai tự nhiên.', image: '/image/muc1.jpg' },
    { id: 3, name: 'Cam bù Hương Sơn', description: 'Vị ngọt thanh, mọng nước, hương thơm đặc trưng.', image: '/image/cam.jpg' },
    { id: 4, name: 'Bưởi Phúc Trạch' , description: 'Bưởi Phúc Trạch là giống bưởi đặc sản của vùng đất Hương Khê, Hà Tĩnh đã được Tổ chức kỷ lục Việt Nam xác lập vào Top 50 đặc sản trái cây nổi tiếng Việt Nam.', image: '/image/buoi.jpg' },
]

const food =[
  { src: '/image/muc.jpg',
    name: 'Mực nhảy ',
    description: 'Đây là một món hải sản đến từ vùng biển Vũng Áng, những con mực to, tươi rói được đánh bắt xong sẽ mang đi chế biến ngay để giữ được vị ngon ngọt riêng.'
  },
  { src: '/image/chaoCanh.jpg',
    name: 'Cháo canh ',
    description: 'Món ăn có những sợi bánh canh được làm ra từ bột mì rất khác biệt, nên có màu trắng đục và khi ăn vào sẽ khá dẻo, dai, thơm.'
  },
  { src: '/image/ram.jpg',
    name: 'Ram bánh mướt',
    description: 'Ram bánh mướt là món đặc sản Hà Tĩnh có cái tên khá lạ, đây là món ăn được kết hợp giữa ram nóng và bánh mướt đặc trưng tại Hà Tĩnh.'
  },
  { src: '/image/bNgao.jpg',
    name: 'Bánh ngào ',
    description: 'Bánh ngào là món ăn vặt được chế biến khá giống với bánh trôi nước, với phần ngoài được làm từ bột gạo phủ gừng, mật và đậu phộng béo béo.'
  },
]

const Food = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelect = (index) => {
    setActiveIndex(index)
  }

  const currentSpecialty = specialtiesData[activeIndex]

  const numItems = specialtiesData.length
  const radius = 320 
  const startAngle = Math.PI       
  const endAngle = Math.PI * 1.5  
  const totalAngleSpan = endAngle - startAngle 

  const calculatePosition = (index) => {
    const angleStep = numItems > 1 ? totalAngleSpan / (numItems - 1) : 0
    const angle = startAngle + index * angleStep

    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return {
      left: `calc(85% + ${x}px)`,
      top: `calc(85% + ${y}px)`,
    }
  }


  return (
    <>
      <section id ='food' className='py-16 bg-slate-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-6'>
              <h2 className='text-3xl font-bold mb-4'>Đặc sản địa phương </h2>
              <div className='w-20 h-1 bg-green-600 mx-auto'></div>
              <p className='mx-auto mt-6 max-w-2xl text-lg text-green-500'>Khám phá những món ăn đặc sản nổi tiếng của Hà Tĩnh, từ kẹo Cu Đơ đến cam Bù Hương Sơn và nhiều món ngon khác.</p>
          </div>

        <section className="relative w-full min-h-screen overflow-hidden bg-slate-900"> 

          <div className="absolute inset-0 z-0">
            {specialtiesData.map((item, index) => (
              <div
                key={`bg-${item.id}`}
                className={`
                  absolute inset-0 transition-opacity duration-1000 ease-in-out
                  ${activeIndex === index ? 'opacity-10' : 'opacity-0'}
                `}
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 lg:p-24 text-white max-w-lg md:max-w-xl lg:max-w-3xl"> {/* Tăng padding và max-width */}
            <h2 className="text-base md:text-lg font-semibold uppercase tracking-wider mb-3 text-gray-400">
              Đặc sản địa phương
            </h2>
            <div key={`text-${activeIndex}`} className="animate-fadeInBasic">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-gray-100"> {/* Tăng kích thước chữ */}
                    {currentSpecialty.name}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300"> {/* Tăng kích thước chữ */}
                    {currentSpecialty.description}
                </p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-20 w-96 h-96 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
            <div className="relative w-full h-full">
              {specialtiesData.map((item, index) => {
                const positionStyle = calculatePosition(index) 

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(index)}
                    className={`
                      absolute transform -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                      rounded-full border cursor-pointer
                      flex items-center justify-center text-center
                      transition-all duration-300 ease-in-out focus:outline-none                  
                      shadow-lg
                      overflow-hidden
                      p-1
                        ${activeIndex === index
                          ? 'border-2 border-white scale-105 z-10' // Style active: border rõ, to hơn
                          : 'border border-gray-500/50 scale-100 hover:border-gray-400/70' // Style inactive
                        }
                    `}
                    style={positionStyle} 
                    aria-label={`Chọn ${item.name}`}
                  >
                    <img
                      src={item.image} 
                      alt={item.name}    
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    {activeIndex !== index && (
                      <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 hover:bg-black/30"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </section>
          </div>
      </section>
      
      <div className='container mx-auto px-4 bg-slate-100'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Ẩm thực</h2>
            <div className='w-20 h-1 bg-green-600 mx-auto'></div>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-green-500'>Ngoài những đặc sản nổi tiếng, Hà Tĩnh còn có nhiều món ăn truyền thống khác như cháo canh, bánh bèo, cháo lươn, gỏi cá trích...</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {food.map((item, index)=>(
            <div key= {index} className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300'>
            <img
              src={item.src}
              className='w-full h-48 object-cover rounded mb-4'
            />
            <h3 className='text-xl font-semibold mb-2 text-gray-600'>{item.name}</h3>
            <p className='text-gray-600 text-sm'>{item.description}</p>
          </div>
          ))}
          
        </div>
      </div>
    </>
    
  )
}

export default Food
