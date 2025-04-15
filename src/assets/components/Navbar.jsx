import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { User } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { authUser, logout } = useAuthStore()
  const navigate = useNavigate()

  const navItems = [
    { name: 'Lịch sử - Văn hóa', href: '/#history' },
    { name: 'Du lịch', href: '/#travel' },
    { name: 'Đồ ăn ', href: '/#food' },
    { name: 'Cafe ', href: '/#coffee' },
  ]

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogin = () => {
    navigate('/login')
  }

  const handlePostNews = () => {
    navigate('/postNews')
  }
  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300 ease-in-out shadow-md py-3
        ${scrolled ? 'bg-gray-100 text-gray-800' : 'bg-green-600 text-white'}
      `}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <img
            src='/image/logo.png'
            className='block h-7 w-auto object-contain'
            alt="Logo"
          />
        </div>

        <ul className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <li className="relative group">
            <a
              href="/#home"
              className="font-medium text-base lg:text-lg relative group-hover:text-gray-800 pb-1 px-1 rounded-md transition-colors duration-200"
            >
              Trang chủ
            </a>
            <div className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-md py-2 px-4 hidden group-hover:block z-50 min-w-[220px]">
              {authUser ? (
                <div>
                  <div className='px-3 py-2 text-sm text-gray-600 flex items-center gap-2 border-b border-gray-200'>
                    <User className='size-4 text-gray-500'/>
                    <span className='font-medium truncate'>{authUser.userName}</span>
                    <span className='font-medim text-gray-400'>({authUser.email})</span>
                  </div>
                  <button
                    onClick={handlePostNews}
                    className="block w-full text-left hover:text-yellow-300"
                  >
                    Đăng tin tức 
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left hover:text-red-500"
                  >
                    Đăng xuất
                  </button>
                </div>
                
              ) : (
                <button
                  onClick={handleLogin}
                  className="block w-full text-left hover:text-green-600"
                >
                  Đăng nhập
                </button>
              )}
            </div>
          </li>

          {navItems.map((item, index) => (
            <li key={item.name + index}>
              <a
                href={item.href}
                className={`
                  font-medium text-base lg:text-lg relative group pb-1 px-1 rounded-md
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-opacity-70
                  ${scrolled
                    ? 'hover:text-black focus:ring-gray-500 focus:ring-offset-gray-100'
                    : 'hover:text-gray-100 focus:ring-white focus:ring-offset-green-600'}
                `}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
