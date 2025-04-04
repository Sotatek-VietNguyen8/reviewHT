import { ChevronRight, MapPin } from 'lucide-react'
import React from 'react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
const Travel = () => {

    const travelAddress= [
        {
            imgSrc: '/image/nbdl2.jpg',
            alt: 'Ngã Ba Đồng Lộc',
            location: 'Huyện Can Lộc, Hà Tĩnh',
            description: 'Di tích lịch sử cấp quốc gia đặc biệt, nơi ghi dấu sự hy sinh anh dũng của 10 nữ thanh niên xung phong trong chiến tranh.',
            link: 'https://hatinh.gov.vn/gioi-thieu-ve-quan-the-khu-di-tich-nga-ba-dong-loc'
        },
        {
            imgSrc: '/image/HKG.jpg',
            alt: 'Hồ Kẻ Gỗ',
            location: 'Huyện Cẩm Xuyên, Hà Tĩnh',
            description: 'Hồ Kẻ Gỗ Hà Tĩnh không chỉ là một địa danh mang nặng tình yêu quê hương, đất nước mà còn là nơi có cảnh sắc thiên nhiên rất trữ tình...',
            link: 'https://vinpearl.com/vi/ho-ke-go-ha-tinh-diem-den-hap-dan-giai-nhiet-mua-he',
          },
          {
            imgSrc: '/image/btc.png',
            alt: 'Biển Thiên Cầm',
            location: 'Huyện Cẩm Xuyên, Hà Tĩnh',
            description: 'Biển Thiên Cầm Hà Tĩnh được biết tới với cái tên “Cung đàn biển” miền Trung. Nơi đây với bãi biển trải dài cát trắng...',
            link: 'https://vinpearl.com/vi/kinh-nghiem-du-lich-bien-thien-cam-ha-tinh-cung-dan-bien-mien-trung',
          },
          {
            imgSrc: '/image/dabac.jpg',
            alt: 'Da bac ECO',
            location: 'Xã Nam Điền, Thạch Hà, Hà Tĩnh',
            description: 'Đây là nơi lý tưởng cho các sự kiện gặp gỡ giao lưu, nơi nghỉ dưỡng yên tĩnh của những người lớn tuổi, đồng thời cũng là nơi trải nghiệm các hoạt động ngoại khóa dành cho học sinh, sinh viên...',
            link: 'https://xuctiendautu.hatinh.gov.vn/articles/348',
          },
          {
            imgSrc: '/image/nd.jpg',
            alt: 'Khu tưởng niệm Nguyễn Du',
            location: ' Huyện Nghi Xuân, tỉnh Hà Tĩnh',
            description: 'Khu lưu niệm Đại thi hào Nguyễn Du...',
            link: 'https://vietnamtourism.gov.vn/post/19259'
          },
          {
            imgSrc: '/image/dc.jpg',
            alt: 'Đồi chè Kỳ Trung',
            location: ' Huyện Kỳ Anh, tỉnh Hà Tĩnh',
            description: 'Đến đây, du khách không chỉ có cơ hội chiêm ngưỡng đồi chè được bao bọc bởi núi rừng trùng điệp...',
            link: 'https://dulichhatinh.com.vn/tin-tuc/doi-che-ky-trung-ha-tinh/'
          },

    ]
  return (
    <section className='py-16 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Điểm du lịch nổi bật </h2>
            <div className='w-20 h-1 bg-green-600 mx-auto'></div>
        </div>

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
                rotate:50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='!pd-12'
        >
            {travelAddress.map((travel, index)=>(
                <SwiperSlide key={index} className='h-auto !w-[75%] sm:!w-[55%] md:!w-[40%] lg:!w-[30%] xl:!w-[28%]'>
                    <div className='bg-gray-50 rounded-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl border border-gray-200 h-full group'>
                        <div className='relative w-full h-48'>
                            <img
                                src={travel.imgSrc}
                                alt={travel.alt}
                                className='w-full h-full object-cover'
                                loading='lazy'
                            />
                        </div>
                        <div className='p-4 flex flex-col flex-grow'>
                            <div className='flex items-center text-sm text-gray-600 mb-2'>
                                <MapPin className='h-4 w-4 mr-1 text-gray-500 flex-shrink-0'/>
                                <span className='font-medium'>{travel.location}</span>
                            </div>
                            <p className='text-gray-700 text-sm mb-4 flex-grow'>
                                {travel.description}
                            </p>
                            <a
                                href={travel.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-auto inline-flex items-center justify-center px-4 py-2 border border-green-600 test-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-500 transition duration-150 ease-in-out w-full'
                            >
                                Xem thêm <ChevronRight className='h-4 w-4 ml-1'/>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))
            }
        </Swiper>
      </div>
    </section>
  )
}

export default Travel
