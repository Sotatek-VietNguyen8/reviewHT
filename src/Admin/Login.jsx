import React, { useState, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom' 
import { useAuthStore } from '../assets/store/useAuthStore'
import { Lock, Eye, EyeOff, Loader2, User } from 'lucide-react'

const LoginPage = () => {
    const [showPassW, setShowPassW] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate() 

    const login = useAuthStore((state) => state.login)
    const authUser = useAuthStore((state) => state.authUser)


    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(formData)
    }

    useEffect(() => {
        if (authUser) {
            navigate('/') 
        }
       
    }, [authUser, navigate]) 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
  <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Đăng nhập</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <User className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="email"
              className="w-full px-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type={showPassW ? 'text' : 'password'}
              className="w-full px-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="******"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              onClick={() => setShowPassW(!showPassW)}
              aria-label={showPassW ? "Hide password" : "Show password"}
            >
              {showPassW ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <div className="text-right mt-1">
            <a href="#" className="text-sm text-blue-600 hover:underline">Quên mật khẩu?</a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}

export default LoginPage 