import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import { EffectCards } from 'swiper/modules'
import { Pagination } from 'swiper/modules'

const History = () => {
    const [activeTab, setActiveTab] = useState('history')
    const handleTabClick = (e, tabname)=> {
        e.preventDefault()
        setActiveTab(tabname)
    }
    const listCulture = [
        {
            imgSrc: '/image/culture.jpg',
            alt:'Dan ca Vi dam',
        },
        {
            imgSrc: '/image/ChuaHT.jpg',
            alt:'Le hoi Chua Huong',
        },
        {
            imgSrc: '/image/keoCD.jpg',
            alt:'keo Cu do',
        }
    ]
    const listPeople = [
        {
            imgSrc: '/image/NguyenCongTru.jpg',
            alt:'NGUYEN CONG TRU',
            name: 'Nguyễn Công Trứ',
            description: 'Nhà thơ, nhà quân sự và chính trị gia tài năng, người có công lớn trong việc khai hoang lập ấp vùng đất Tiền Hải, Kim Sơn.'
        },
        {
            imgSrc: '/image/HaiThuongLanOng.jpg',
            alt:'HAI THUONG LAN ONG',
            name: 'Hải Thượng Lãn Ông',
            description: 'Danh y nổi tiếng Lê Hữu Trác, người có công lớn trong việc phát triển nền y học cổ truyền Việt Nam.'

        },
        {
            imgSrc: '/image/nguyenDu.png',
            alt:'NGUYEN DU',
            name: 'Nguyễn Du',
            description: `Đại thi hào dân tộc, tác giả của kiệt tác 'Truyện Kiều' - một trong những tác phẩm văn học vĩ đại nhất của Việt Nam.`
        },
        {
            imgSrc: '/image/LeDuan.jpg',
            alt:'Le Duan',
            name: 'Lê Duẫn',
            description: ' Người chiến sĩ cộng sản kiên cường, một nhà lãnh đạo kiệt xuất của cách mạng Việt Nam, người học trò lỗi lạc, kế tục xuất sắc sự nghiệp cách mạng vẻ vang của Chủ tịch Hồ Chí Minh vĩ đại. '
        }
    ]
  return (
    <section id='history' className='py-16 bg-gray-300'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold mb-4'>Lịch sử & Văn hóa </h2>
            <div className='w-20 h-1 bg-green-600 mx-auto'></div>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-green-500'>Hà Tĩnh tự hào với nền văn hóa đặc sắc và lịch sử hào hùng, là quê hương của nhiều danh nhân văn hóa và anh hùng dân tộc.</p>
        </div>
        
        <nav aria-label='Lua chon'>
            <ul className='flex justify-center mx-auto max-w-md space-x-2 rounded-md bg-gray-100 p-1'>
                <li>
                    <a href='#history' onClick={(e)=>handleTabClick(e, 'history')}
                    className={`inline-block rounded-md px-4 py-1.5 text-sm font-semibold transition-colors duration-150 ease-in-out
                        ${
                            activeTab === 'history'
                            ? 'bg-white text-gray-900 shadow-sm'
                            :'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                        }

                    `}
                        aria-current = {activeTab === 'history' ? 'page': undefined}
                    >
                        Lịch sử
                    </a>
                </li>
                <li>
                    <a href='#culture' onClick={(e)=>handleTabClick(e, 'culture')}
                    className={`inline-block rounded-md px-4 py-1.5 text-sm font-semibold transition-colors duration-150 ease-in-out
                        ${
                            activeTab === 'culture'
                            ? 'bg-white text-gray-900 shadow-sm'
                            :'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                        }
                    `}
                    aria-current = {activeTab === 'culture' ? 'page': undefined}
                    >
                        Văn hóa
                    </a>
                </li>
                <li>
                    <a href='#people'onClick={(e)=>handleTabClick(e, 'people')}
                    className={`inline-block rounded-md px-4 py-1.5 text-sm font-semibold transition-colors duration-150 ease-in-out
                        ${
                            activeTab === 'people'
                            ? 'bg-white text-gray-900 shadow-sm'
                            :'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                        }        
                    `}
                    aria-current = {activeTab === 'people' ? 'page': undefined}
                    >
                        Danh nhân
                    </a>

                </li>
            </ul>
        </nav>

        <div className='mt-8'>
            {activeTab === 'history' && (
                <div className='grid  gap-8 md:grid-cols-2'>
                <div className='relative h-[300px] overflow-hidden rounded-lg md:h-[400px]'>
                    <img
                        src='/image/history.jpg'
                        alt='History'
                        className='absolute inset-0 h-full w-full object-cover'
                        loading='lazy'
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='mb-4 text-2xl font-bold text-gray-900'>Lịch sử hào hùng </h3>
                    <p className='mb-4 text-gray-700'>Hà Tĩnh có lịch sử lâu đời với nhiều dấu ấn quan trọng trong lịch sử dân tộc.Từ thời kỳ
                        Văn Lang - Âu Lạc, vùng đất nàu đac là một phần quan trọng của nước Văn Lang cổ đại
                    </p>
                    <p className='mb-4 text-gray-700'>Trong thời kỳ kháng chiến chống Pháp và chống Mỹ, Hà Tĩnh là địa bàn chiến lược với nhiều
                        chiến công hiền hách. Ngã ba Đồng Lộc, Truông Bồn là những địa danh gắn liền với sự hy sinh anh dũng của quân và dân ta
                    </p>
                    <p className='mb-4 text-gray-700'>Sau giải phóng, Hà Tĩnh tiếp tục phát triển và đạt được nhiều thành tựu quan trọng trong công cuộc xây dựng và phát triển đất nước </p>
                </div>
            </div>
            )}

            {activeTab === 'culture' && (
                <div className='grid  gap-8 md:grid-cols-2'>
                    <div className='flex flex-col justify-center'>
                    <h3 className='mb-4 text-2xl font-bold text-gray-900'>Văn hóa đặc sắc</h3>
                    <p className='mb-4 text-gray-700'>
                        Hà Tĩnh có nền văn hóa phong phú và đa dạng với nhiều loại hình nghệ thuật dân gian độc đáo như Ca
                        trù, Dân ca Ví, Giặm Nghệ Tĩnh (được UNESCO công nhận là di sản văn hóa phi vật thể).
                    </p>
                    <p className='mb-4 text-gray-700'>
                        Lễ hội truyền thống của Hà Tĩnh mang đậm bản sắc văn hóa dân tộc như lễ hội Đền Chiêu Trưng, lễ hội
                        Hải Thượng Lãn Ông, lễ hội chùa Hương Tích...
                    </p>
                    <p className='text-gray-700'>
                        Ẩm thực Hà Tĩnh cũng là một nét văn hóa đặc trưng với các món ăn nổi tiếng như kẹo Cu Đơ, bánh đa Kẻ
                        Gỗ, mực một nắng Vũng Áng...
                    </p>
                    </div>
                    <div className='relative h-[300px] overflow-hidden rounded-lg md:h-[400px]'>
                        <div>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="w-full h-full"
                            >
                                {listCulture.map((culture, index)=>(
                                    <SwiperSlide key={index} className='flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 shadow-md'>
                                        <img
                                            src={culture.imgSrc}
                                            alt={culture.alt}
                                            className=' block h-full w-full object-cover'
                                            loading='lazy'
                                        />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                        
                    </div>
                </div>
            )}

            {activeTab === 'people' && (
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className='w-full h-full'
                    >
                        {listPeople.map((people, index)=>(
                            <SwiperSlide key={index}>
                                <div className='rounded-lg bg-gray-50 p-6 text-center shadow-md'>
                                    <div className='mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full'>
                                        <img
                                        src={people.imgSrc}
                                        alt={people.alt}
                                        width={128}
                                        height={128}
                                        className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <h3 className='mb-2 text-xl font-semibold text-gray-900'>{people.name}</h3>
                                    <p className='text-gray-600'>{people.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>

      </div>
    </section>
  )
}

export default History
