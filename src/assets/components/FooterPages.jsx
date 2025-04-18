import React from 'react'

const FooterPages = () => {
  return (
    <footer className='bg-green-800 text-white py-8'>
        <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-3 gap-8'>

                <div>
                    <h3 className='text-xl font-bold mb-4'>HÀ TĨNH </h3>
                    <p className='mb-4'>Trang thông tin giới thiệu về tỉnh Hà Tĩnh, Việt Nam </p>
                </div>

                <div>
                    <h3 className='text-xl font-bold mb-4'>Liên kết </h3>
                    <ul className='space-y-2'>
                        <li>
                            <a href='https://hatinh.gov.vn/gioi-thieu' 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='hover:underline'>Trang chủ 
                            </a>
                        </li>
                        <li>
                            <a href='https://vi.wikipedia.org/wiki/H%C3%A0_T%C4%A9nh' 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='hover:underline'>Giới thiệu
                            </a>
                        </li>
                        <li>
                            <a href='https://baohatinh.vn/' 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='hover:underline'>Tin tức </a>
                        </li>
                        <li>
                            <a href='' className='hover:underline'>Liên hệ </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl font-bold mb-4'>Kết nối </h3>
                    <div className='flex space-x-4'>
                        <a href= 'https://www.facebook.com/hatinhtv.vnn?' 
                            target='_blank'
                            rel="noopener noreferrer"
                            className='hover:text-gray-300'>
                            <span className='sr-only'>FaceBook</span>
                            <svg className='h6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                                <path
                                    fillRule='evenodd'
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule='evenodd'
                                />
                            </svg>
                        </a>
                        <a href= 'https://youtu.be/UTsADD3xmdg?si=p7XH2Oe_Z8y9i6w3' 
                            target='_blank'
                            rel="noopener noreferrer"
                            className='hover:text-gray-300'>
                            <span className='sr-only'>Youtube</span>
                            <svg className='h6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                                <path
                                    fillRule='evenodd'
                                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                    clipRule='evenodd'
                                />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className='border-t border-green-700 mt-8 pt-6 text-center'>
                <p>&copy;  {new Date().getFullYear()} Tỉnh Hà Tĩnh </p>
            </div>
        </div>
      
    </footer>
  )
}

export default FooterPages
