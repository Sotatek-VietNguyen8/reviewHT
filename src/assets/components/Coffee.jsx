import React from 'react'
import { MapPin, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import { EffectCube, Pagination, Autoplay } from 'swiper/modules'

const Coffee = () => {
  const listCoffee = [
    {
      imgSrc: '/image/mc.jpg',
      alt: 'mochigarden',
      name: 'Mochi Garden',
      location: 'Số 33 đường Võ Liêm Sơn, phường Nam Hà, thành phố Hà Tĩnh',
      link: 'https://www.facebook.com/mochigardencoffee.',
    },
    {
      imgSrc: '/image/td.jpg',
      alt: 'Thanh Dong',
      name: 'Thành Đồng Cafe',
      location: 'Đường 26/3, phường Đại Nài, thành phố Hà Tĩnh',
      link: 'https://www.facebook.com/ThanhDongCoffee.HaTinh',
    },
    {
      imgSrc: '/image/tl.jpg',
      alt: 'The LightLight',
      name: 'The Light Coffee',
      location: 'Số 46 đường Lê Duẩn, phường Trần Phú, thành phố Hà Tĩnh.',
      link: 'https://www.facebook.com/lightcoffee.hatinh',
    },
    {
      imgSrc: '/image/kc.jpg',
      alt: 'King Koi',
      name: 'King Koi Cafe',
      location: 'Số 1 Trường Chinh, thành phố Hà Tĩnh.',
      link: 'https://www.facebook.com/Kingkoicafe.',
    },
    {
      imgSrc: '/image/mj.jpg',
      alt: 'Mojo',
      name: 'Mojo Coffee',
      location: 'Số 252 Nguyễn Du, thành phố Hà Tĩnh',
      link: 'https://www.facebook.com/MojoCafeHaTinh',
    },
  ]

  return (
    <section id="coffee" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className=" text-3xl font-bold mb-4">Quán Cafe View Đẹp </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <Swiper
          effect={'cube'}
          grabCursor={true}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false, 
          }}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper cube-swiper !pb-10"
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          {listCoffee.map((coffee, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="relative w-full h-80">
                  <img
                    src={coffee.imgSrc}
                    alt={coffee.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {coffee.name}
                  </h3>
                  <div className="flex items-start text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1.5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{coffee.location}</span>
                  </div>
                  {coffee.link && (
                    <a
                      href={coffee.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-orange-500 text-sm font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition duration-150 ease-in-out w-full"
                    >
                      Facebook
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Coffee