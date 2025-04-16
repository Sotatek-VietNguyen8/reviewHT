import React, { useState } from 'react'
import { useNewStore } from '../assets/store/useNewsStore'
import { Loader2, Send } from 'lucide-react'

const PostNews = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { postNews } = useNewStore()
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const today = new Date()
  const initialPostDate = formatDate(today)

  const [formData, setFormData] = useState({
    newsName: '',
    author: '',
    topic: '',
    content: '',
    postDate: initialPostDate
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const newsData = await postNews(formData)
      if (newsData) {
        setFormData({
          newsName: '',
          author: '',
          topic: '',
          content: '',
          postDate: formatDate(today)
        })
      }
    } catch (error) {
      console.error('Error on submit postNews: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='w-full max-w-2xl bg-white rounded-2xl shadow-md p-8 space-y-6'>
        <h1 className='text-3xl font-bold text-center text-gray-800'> Đăng Tin Tức Mới</h1>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='block text-gray-700 font-medium mb-1'>Tiêu đề</label>
            <input
              type='text'
              name='newsName'
              className='input input-bordered w-full'
              placeholder='Nhập tiêu đề bài viết'
              value={formData.newsName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className='block text-gray-700 font-medium mb-1'> Tác giả</label>
            <input
              type='text'
              name='author'
              className='input input-bordered w-full'
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className='block text-gray-700 font-medium mb-1'>Lĩnh vực</label>
            <select
              name='topic'
              className='select select-bordered w-full'
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value='' disabled>Chọn lĩnh vực</option>
              <option value='Kinh tế'>Kinh tế</option>
              <option value='Chính trị'>Chính trị</option>
              <option value='An ninh - Quốc phòng'>An ninh - Quốc phòng </option>
              <option value='Xã hội'>Xã hội</option>
              <option value='Văn hóa'>Văn hóa</option>
              <option value='Đời sống'>Đời sống</option>
              <option value='Giáo dục'>Giáo dục</option>
              <option value='Việt Nam hôm nay'>Việt Nam hôm nay</option>
              <option value='Quốc tế'>Quốc tế</option>
            </select>
          </div>

          <div>
            <label className='block text-gray-700 font-medium mb-1'> Nội dung</label>
            <textarea
              name='content'
              rows={6}
              className='textarea textarea-bordered w-full'
              placeholder='Nhập nội dung bài viết...'
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label className='block text-gray-700 font-medium mb-1'>Ngày đăng tin </label>
            <input
              type='date'
              className='input input-bordered w-full'
              value={formData.postDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className='flex justify-center mt-6'>
            <button
                type='submit'
                className={`btn bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 flex items-center justify-center ${
                isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                }`}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                <>
                    <Loader2 className='animate-spin mr-2 h-5 w-5' />
                    Đang xử lý...
                </>
                ) : (
                <>
                    <Send className='mr-2 h-5 w-5' />
                    Đăng tin
                </>
                )}
            </button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default PostNews
