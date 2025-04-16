import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../assets/store/useAuthStore'
import { useNavigate } from 'react-router-dom'

const ResetPsw = () => {
  const {
    requestPswReset,
    resetPassword,
    isRequestingReset,
    isResettingPassword,
    authUser
  } = useAuthStore()

  const [formData, setFormData] = useState({
    email: '',
    code: '',
    newPassword: '',
  })
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (authUser) {
      navigate('/')
    }
  }, [authUser, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setMessage('')
    setError('')
  }

  const handleRequestCodeSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    if (!formData.email) {
      setError('Please enter your email address.')
      return
    }
    const result = await requestPswReset({ email: formData.email })

    if (result.success) {
      setMessage(result.message || 'If your email exists, you will receive a code.')
      setStep(2)
    } else {
      setError(result.error || 'Failed to send code. Please try again.')
    }
  }

  const handleResetPswSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    if (!formData.code || !formData.newPassword) {
      setError('Please enter the code and new password.')
      return
    }
    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }
    const result = await resetPassword({
      email: formData.email,
      code: formData.code,
      newPassword: formData.newPassword
    })

    if (result.success) {
      navigate('/login')
    } else {
       setError(result.error || 'Password reset failed. Please check code/password and try again.')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4'>
      <div className='w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden'>
        <div className='p-8'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
            {step === 1 ? 'Request Password Reset' : 'Enter Code & New Password'}
          </h2>

          {message && <p className="text-center text-green-600 mb-4 p-2 bg-green-100 rounded">{message}</p>}
          {error && <p className="text-center text-red-600 mb-4 p-2 bg-red-100 rounded">{error}</p>}

          {step === 1 && (
            <form onSubmit={handleRequestCodeSubmit} noValidate>
              <p className='text-sm text-center text-gray-500 mb-4'>Enter your account's email address and we will send you a code to reset your password.</p>
              <div className=' mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Nhập email của bạn'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isRequestingReset}
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50'
                disabled={isRequestingReset}
              >
                {isRequestingReset ? 'Sending Code...' : 'Send Reset Code'}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleResetPswSubmit} noValidate>
              <p className='text-sm text-center text-gray-500 mb-4'>A code has been sent to <strong>{formData.email}</strong>. Enter the code and your new password.</p>
              <div className=' mb-4'>
                <label htmlFor='code' className='block text-sm font-medium text-gray-700 mb-1'>Verification Code</label>
                <input
                  type='text'
                  id='code'
                  name='code'
                  inputMode='numeric'
                  pattern='\d*'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
                  placeholder='Enter the 6-digit code'
                  value={formData.code}
                  onChange={handleInputChange}
                  required
                  maxLength={6}
                  disabled={isResettingPassword}
                />
              </div>

              <div className=' mb-6'>
                <label htmlFor='newPassword' className='block text-sm font-medium text-gray-700 mb-1'>New Password</label>
                <input
                  type='password'
                  id='newPassword'
                  name='newPassword'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
                  placeholder='Enter new password (min. 6 characters)'
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  disabled={isResettingPassword}
                />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  type='button'
                  onClick={() => {
                    setStep(1)
                    setMessage('')
                    setError('')
                    setFormData(form => ({ ...form, code: '', newPassword: '' }))
                  }}
                  className='text-sm text-gray-600 hover:text-gray-800 focus:outline-none'
                  disabled={isResettingPassword}
                >
                  Back to email entry
                </button>
                <button
                  type='submit'
                  className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50'
                  disabled={isResettingPassword}
                >
                  {isResettingPassword ? 'Resetting...' : 'Reset Password'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResetPsw