import React, { useEffect, useState } from 'react'
import { useNewStore } from '../store/useNewsStore'
import { ChevronRight, X } from 'lucide-react'

const News = () => {
  const { getNews } = useNewStore()
  const [newsList1, setNewsList1] = useState([])
  const [newsList2, setNewsList2] = useState([])
  const [selectedNews, setSelectedNews] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews()
        if (Array.isArray(res)) {
          const sortByDate = [...res].sort((a, b) => new Date(b.postDate) - new Date(a.postDate))
          const filterTopic = sortByDate.filter(x => {
            const topic = x.topic?.toLowerCase()
            return topic === 'việt nam hôm nay' || topic === 'quốc tế'
          })

          const otherNews = sortByDate.filter(x => !filterTopic.includes(x))

          setNewsList1(otherNews)
          setNewsList2(filterTopic)
        }
      } catch (err) {
        console.error('Error fetching news:', err)
      }
    }
    fetchNews()
  }, [getNews])

  return (
    <section id = 'news' className='py-16 bg-white relative'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Sự kiện & Tin tức </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto'></div>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-green-500'>
            Cập nhật những tin tức mới nhất và sự kiện sắp diễn ra tại Hà Tĩnh
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-2/3 w-full'>
            <h3 className='text-2xl font-semibold text-gray-700 mb-4'>Bản tin mới nhất hôm nay</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2'>
              {newsList1.map(news => (
                <NewsCard key={news._id} news={news} onClick={() => setSelectedNews(news)} />
              ))}
            </div>
          </div>

          <div className='lg:w-1/3 w-full'>
            <h3 className='text-2xl font-semibold text-red-600 mb-4'>Việt Nam - Quốc tế</h3>
            <div className='grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-2'>
              {newsList2.map(news => (
                <NewsCard key={news._id} news={news} onClick={() => setSelectedNews(news)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup hiển thị chi tiết */}
      {selectedNews && (
        <div className='fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4'>
          <div className='bg-white p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-lg'>
            <button
              className='absolute top-3 right-3 text-gray-600 hover:text-red-600'
              onClick={() => setSelectedNews(null)}
            >
              <X className='w-5 h-5' />
            </button>
            <Broadcast news={selectedNews} />
          </div>
        </div>
      )}
    </section>
  )
}

const NewsCard = ({ news, onClick }) => (
  <div className='bg-white p-4 rounded-lg shadow flex flex-col h-full'>
    <h3 className='text-xl font-bold mb-2'>{news.newsName}</h3>
    <p className='text-left text-xs text-green-600 mt-2'>
      {new Date(news.postDate).toLocaleDateString()}
    </p>
    <p className='text-sm text-gray-500 mb-1'>Chủ đề: {news.topic}</p>
    <p className='text-gray-700 flex-grow'>{news.content.slice(0, 100)}...</p>
    <p className='text-sm text-right text-gray-500 mb-1'>Tác giả: {news.author}</p>
    <button
      onClick={onClick}
      className='mt-2 inline-flex items-center justify-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 w-full transition duration-150 ease-in-out'
    >
      Xem thêm <ChevronRight className='h-4 w-4 ml-1' />
    </button>
  </div>
)

const Broadcast = ({ news }) => (
  <div className='bg-gray-100 p-4 rounded-lg'>
    <h3 className='text-2xl font-bold mb-4 text-center'>{news.newsName}</h3>
    <p className='text-sm text-right text-gray-500 mb-1'>Tác giả: {news.author}</p>
    <p className='text-left text-xs text-green-600 mt-2'>
      {new Date(news.postDate).toLocaleDateString()}
    </p>
    <p className='text-sm text-gray-500 mb-2'>Chủ đề: {news.topic}</p>
    <p className='text-gray-700 whitespace-pre-line'>{news.content}</p>
  </div>
)

export default News
