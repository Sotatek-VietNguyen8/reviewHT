import { Building2, MapPin, User2 } from 'lucide-react';
import React, { useState } from 'react'

const Content = () => {

  const ggMap = 'https://www.google.com/maps/place/Tp.+H%C3%A0+T%C4%A9nh,+H%C3%A0+T%C4%A9nh/data=!4m2!3m1!1s0x31384e25a01235b9:0xbcd7270a51316e31?sa=X&ved=1t:242&ictx=111'
  const locationImage =[
    { id: 1, src: '/image/NBDL.jpg', alt: 'Nga Ba Dong Loc', name: 'Ngã Ba Đồng Lộc' },
    { id: 2, src: '/image/TpHT.jpg', alt: 'Thanh pho Ha Tinh', name: 'Thành phố Hà Tĩnh' },
    { id: 3, src: '/image/VQGVQ.jpg', alt: 'Vuon quoc gia Vu Quang', name: 'Vườn quốc gia Vũ Quang' },
    { id: 4, src: '/image/BTC.jpg', alt: 'Bien Thien Cam', name: 'Biển Thiên Cẩm' },
  ]
  
  const [flippedStates, setFlippedStates] = useState({});
  
    const handleFlip = (id) => {
      setFlippedStates(prev => ({
        ...prev,
        [id]: !prev[id]
      }))
    }
  return (
    <>
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Giới thiệu về Tỉnh Hà Tĩnh </h2>
            <div className='w-20 h-1 bg-green-600 mx-auto'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
                <p className='text-gray-700 mb-4'>
                  Hà Tĩnh là tỉnh ven biển phía bắc của vùng Bắc Trung Bộ, miền Trung Việt Nam.
                </p>
                <p className='text-gray-700 mb-4'>
                  Tỉnh Hà Tĩnh được thành lập lần đầu tiên năm 1831, đời vua Minh Mạng trên cơ sở chia trấn Nghệ An thành 2 tỉnh: Nghệ An (phía Bắc sông Lam); Hà Tĩnh (phía nam sông Lam). 
                  Theo đó, tỉnh Hà Tĩnh lúc thành lập với gồm 2 phủ Đức Thọ và Hà Hoa của trấn Nghệ An trước đó.
                  Năm 1976, Hà Tĩnh sáp nhập với Nghệ An, lấy tên là Nghệ Tĩnh. Năm 1991, Quốc hội Việt Nam khóa VIII ra nghị quyết chia tỉnh Nghệ Tĩnh, tái lập tỉnh Nghệ An và tỉnh Hà Tĩnh
                </p>
                <p className='text-gray-700 mb-4'>
                  Hà Tĩnh có bờ biển dài 137 km, với tổng diện tích vùng biển 18.400 km2, gấp ba lần diện tích đất liền của tỉnh. Biển Hà Tĩnh có tính đa dạng sinh học cao, vùng ven bờ thuận lợi cho việc nuôi trồng thuỷ sản với diện tích trên 20.000 ha; bờ cát dài, thoải, mịn cùng với làn nước trong xanh là điều kiện lý tưởng để phát triển các khu du lịch biển như Thiên Cầm, Xuân Thành, Đèo Con. 
                  Đặc biệt, Cụm cảng nước sâu như Vũng Áng, Sơn Dương trong tương lai sẽ là cửa ngõ ra biển Đông và Thái Bình Dương của vùng Bắc Trung bộ và các nước trong khu vực như Lào, Thái Lan và Myanma.
                </p>
                <p className='text-gray-700 mb-4 '>
                  Hà Tĩnh nổi tiếng với lịch sử văn hóa phong phú, là quê hương của nhiều danh nhân như đại thi hào Nguyễn Du - tác giả của kiệt tác Truyện Kiều, và nhiều di tích lịch sử quan trọng như Khu di tích Ngã ba Đồng Lộc, Khu lưu niệm Nguyễn Du.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6 p-6'>
            {locationImage.map((location) => (
              <div
                key={location.id}
                className='group [perspective:1000px]'
                onClick={() => handleFlip(location.id)} 
              >
                <div
                  className={`relative h-48 rounded-lg shadow-lg cursor-pointer transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                    flippedStates[location.id] ? '[transform:rotateY(180deg)]' : '' 
                  }`}
                >
                  <div className='absolute inset-0 w-full h-full [backface-visibility:hidden]'>
                    <img
                      src={location.src}
                      alt={location.alt}
                      className='w-full h-full object-cover rounded-lg' 
                    />
                  </div>

                  <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white rounded-lg flex items-center justify-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                    <p className='text-center text-xl font-semibold'>{location.name}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      </div>
    </section>

    <section className='py-10 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className=' text-center mb-7'>
          <h2 className='text-3xl font-bold mb-4'>Thông tin cơ bản </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 '>
            <MapPin className='w-12 h-12 text-green-600 mx-auto mb-4'/>
            <a
              href={ggMap}
              target='_blank'
              rel="noopener noreferrer"
              className='focus:outline-none'
              aria-label='Xem vi tri'
            >
              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
              Vị trí
            </a>
            <p className='text-gray-700 text-sm'>Trải dài từ 17°54’ đến 18°37’ vĩ Bắc và từ 106°30’ đến 105°07’ kinh Đông</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-600 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>            
            <h3 className='text-xl font-semibold mb-2 text-gray-600'>Diện tích </h3>
            <p className='text-gray-700 text-sm'>5.994,45 km²</p>
          </div>
          
          <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 '>
            <User2 className='w-12 h-12 text-green-600 mx-auto mb-4'/>
            <h3 className='text-xl font-semibold mb-2 text-gray-600'>Dân số </h3>
            <p className='text-gray-700 text-sm'>	1.317.200 người</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 '>
            <Building2 className='w-12 h-12 text-green-600 mx-auto mb-4'/>
            <h3 className='text-xl font-semibold mb-2 text-gray-600'>Đơn vị hành chính </h3>
            <p className='text-gray-700 text-sm'>12 đơn vị hành chính cấp huyện</p>
            <p className='text-gray-700 text-sm'> 209 đơn vị hành chính cấp xã</p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Content
