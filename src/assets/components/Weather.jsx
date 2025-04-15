// import axios from 'axios'
// import { Cloud, CloudRain, CloudSnow, Droplet, Eye, Gauge, Sun, Thermometer, Wind } from 'lucide-react'
// import React, { useEffect, useState } from 'react'

// const Weather = () => {
//     const [weatherData , setWeatherData] = useState(null)
//     const [loading , setLoading] = useState(true)
//     const api_key = import.meta.env.VITE_WEATHERSTACK_API_KEY
//     const locationQuery = 'HA TINH'

//     useEffect(() => {
//         if(!api_key){
//             setLoading(false)
//             console.log("ERROR: bien moi truong 'VITE_WEATHERSTACK_API_KEY' ")
//             return
//         }
//         const fetchWeather = async () => {
//             setLoading(true)
//             try{
//                 const response = await axios.get(`http://api.weatherstack.com/current`, {
//                     params: {
//                         access_key: api_key,
//                         query: locationQuery,
//                         units: 'm'
    
//                     }
//                 })
//                 console.log("API response: ", response.data)
    
//                 if(response.data.success === false){
//                     console.error(`Loi tu WeatherStack: ${response.data.error.info} (Code: ${response.data.error.code})`)
//                     console.error('Loi API WeatheStack', response.data.error)
//                 }else if (response.data.current && response.data.location){
//                     setWeatherData(response.data)
//                 }
//                 else{
//                     console.error('Du lieu khong hop le', response.data)
//                 }
//             }catch(error) {
//                 console.error('Loi khi goi API thoi tiet')
//             }finally{
//                 setLoading(false)
//             }
//         }
        
//         fetchWeather()
//     }, [api_key, locationQuery])

//     const getWeatherIcon = (code, isDay) => {
//         if(code === 113) return <Sun className='w-12 h-12 text-yellow-500'/>
//         if(code === 116) return <Cloud className='w-12 h-12 text-gray-400'/>
//         if(code === 119 || code === 122) return <Cloud className='w-12 h-12 text-gray-500'/>
//         if([176, 263, 266, 293, 296, 299, 302, 305, 308, 353, 356, 359].includes(code)) return <CloudRain className='w-12 h-12 text-blue-500'/>
//         if([179, 182, 185, 227, 230, 323, 326, 329, 332, 335, 338, 368, 371].includes(code)) return <CloudSnow className='w-12 h-12 text-blue-200'/>
//         return <Thermometer className='w-12 h-12 text-gray-600'/>
//     }
//   return (
//     <section id='weather' className='py-16 bg-gradient-to-br from-blue-100 via-blue-100 to-white'>
//         <div className='container mx-auto px-4'>
//             {loading && (
//                 <div className='text-center text-gray-600'>Weather loading...</div>
//             )}

//             {weatherData && (
//                 <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8'>
//                     <div className='flex flex-col items-center text-center md:text-left md:items-start'>
//                         <h3 className='text-2xl font-semibold text-gray-800'>
//                             {weatherData.location.name}, {weatherData.location.country}
//                         </h3>
//                         <p>
//                             Update: {new Date(weatherData.location.localtime).toLocaleDateString('vi-VN', {hour:'2-digit', minute: '2-digit'})}
//                             ({weatherData.current.observation_time} UTC )
//                         </p>
//                         <div className='flex items-center space-x-4 mb-3'>
//                             {weatherData.current.weather_icons && weatherData.current.weather_icons.length > 0 ? (
//                                 <img
//                                     src={weatherData.current.weather_icons[0]}
//                                     alt={weatherData.current.weather_descriptions[0]}
//                                     className='w-16 h-16'
//                                 />
//                             ):(
//                                 getWeatherIcon(weatherData.current.weather_code, weatherData.current.is_day==='yes')
//                             )}
//                             <span className='text-6xl font-bold text-gray-900'>{weatherData.current.temperature}°C</span>
//                         </div>
//                         <p className='text-xl font-medium text-gray-700 capitalize mb-1'>
//                             {weatherData.current.weather_descriptions[0]}
//                         </p>
//                         <p>
//                             Cảm giác như: {weatherData.current.feelslike}°C
//                         </p>
//                     </div>

//                     <div className='w-full md:w-auto border-t md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8 flex-grow'>
//                         <h4 className='text-lg font-semibold mb-4 text-gray-700 text-center md: text-left'>Thông tin chi tiết </h4>
//                         <div className='grid grid-cols-2 gap-x-4 gap-y-3 text-sm'>
//                             <div className='flex items-center text-gray-600'>
//                                 <Wind className= 'w-5 h-5 mr-2 text-blue-500'/>
//                                 <span>{weatherData.current.wind_speed} km/h({weatherData.current.wind_dir})</span>
//                             </div>
//                             <div className='flex items-center text-gray-600'>
//                                 <Droplet  className='w-5 h-5 mr-2 text-cyan-500'/>
//                                 <span>{weatherData.current.humidity}%</span>
//                             </div>
//                             <div className='flex items-center text-gray-600'>
//                                 <Eye className='w-5 h-5 mr-2 text-gray-500'/>
//                                 <span>{weatherData.current.visibility} km</span>
//                             </div>
//                             <div className='flex items-center text-gray-600'>
//                                 <Gauge className='w-5 h-5 mr-2 text-purple-500 '/>
//                                 <span>{weatherData.current.pressure} mb</span>
//                             </div>
//                             <div className='flex items-center text-gray-600'>
//                                 <Sun className='w-5 h-5 mr-2 text-orange-600'/>
//                                 <span>{weatherData.current.uv_index}</span>
//                             </div>
//                             <div className='flex items-center text-gray-600'>
//                                 <Cloud className='w-5 h-5 mr-2 text-slate-400'/>
//                                 <span>{weatherData.current.cloudcover}%</span>
//                             </div>
//                         </div>
//                         {weatherData.current.air_quality && (
//                             <div className='mt-4 py-3 border-t border-gray-200'>
//                                 <h5 className='text-md font-medium mb-2 text-gray-700'>Chất lượng không khí (PM2.5)</h5>
//                                 <p className='text-gray-600 text-sm'>
//                                     {parseFloat(weatherData.current.air_quality.pm2_5).toFixed(2)} µg/m³
//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
      
//     </section>
//   )
// }

// export default Weather


import axios from 'axios'
import { Cloud, CloudRain, CloudSnow, Droplet, Eye, Gauge, Sun, Thermometer, Wind, CalendarDays, AlertTriangle } from 'lucide-react'
import React, { useEffect, useState, useCallback } from 'react'

const formatDateForApi = (date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = (`0${d.getMonth() + 1}`).slice(-2)
    const day = (`0${d.getDate()}`).slice(-2)
    return `${year}-${month}-${day}`
}

const Weather = () => {
    const [activeTab, setActiveTab] = useState('current')

    const [currentWeatherData, setCurrentWeatherData] = useState(null)
    const [forecastData, setForecastData] = useState(null)
    const [historicalData, setHistoricalData] = useState(null)
    const [historicalDate, setHistoricalDate] = useState(formatDateForApi(new Date(Date.now() - 86400000)))

    const [loadingCurrent, setLoadingCurrent] = useState(true)
    const [loadingForecast, setLoadingForecast] = useState(false)
    const [loadingHistorical, setLoadingHistorical] = useState(false)
    const [errorCurrent, setErrorCurrent] = useState(null)
    const [errorForecast, setErrorForecast] = useState(null)
    const [errorHistorical, setErrorHistorical] = useState(null)

    const apiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY
    const locationQuery = 'HA TINH'

    const fetchCurrentWeather = useCallback(async () => {
        if (!apiKey) {
            setErrorCurrent("API key chưa được cấu hình.")
            setLoadingCurrent(false)
            return
        }
        setLoadingCurrent(true)
        setErrorCurrent(null)
        try {
            const response = await axios.get(`http://api.weatherstack.com/current`, {
                params: { access_key: apiKey, query: locationQuery, units: 'm' }
            })
            if (response.data.success === false) {
                throw new Error(`Weatherstack Error (Current): ${response.data.error.info} (Code: ${response.data.error.code})`)
            } else if (response.data.current && response.data.location) {
                setCurrentWeatherData(response.data)
            } else {
                throw new Error("Dữ liệu thời tiết hiện tại không hợp lệ.")
            }
        } catch (err) {
            console.error("Lỗi fetch Current Weather:", err)
            setErrorCurrent(err.message || "Không thể tải thời tiết hiện tại.")
        } finally {
            setLoadingCurrent(false)
        }
    }, [apiKey, locationQuery])

    const fetchForecastWeather = useCallback(async () => {
        if (forecastData || !apiKey) {
             if (!apiKey) setErrorForecast("API key chưa được cấu hình.")
             if (forecastData) setLoadingForecast(false)
             return
        }

        setLoadingForecast(true)
        setErrorForecast("Đang tải dự báo... (Lưu ý: Tính năng này yêu cầu gói trả phí Weatherstack)")

        try {
            const response = await axios.get(`http://api.weatherstack.com/forecast`, {
                params: { access_key: apiKey, query: locationQuery, units: 'm', forecast_days: 7 }
            })
             console.log("API Response Forecast:", response.data)

            if (response.data.success === false) {
                 if ([105, 604, 615].includes(response.data.error.code)) {
                      throw new Error(`Gói miễn phí không hỗ trợ API Dự báo (Code: ${response.data.error.code})`)
                 }
                 throw new Error(`Weatherstack Error (Forecast): ${response.data.error.info} (Code: ${response.data.error.code})`)
            } else if (response.data.forecast) {
                setForecastData(response.data)
                setErrorForecast(null)
            } else {
                throw new Error("Dữ liệu dự báo không hợp lệ.")
            }
        } catch (err) {
            console.error("Lỗi fetch Forecast Weather:", err)
            setErrorForecast(err.message || "Không thể tải dự báo thời tiết.")
        } finally {
            setLoadingForecast(false)
        }
    }, [apiKey, locationQuery, forecastData])

    const fetchHistoricalWeather = useCallback(async (date) => {
        if (!apiKey) {
             setErrorHistorical("API key chưa được cấu hình.")
             setLoadingHistorical(false)
             return
        }
         if (!date || isNaN(new Date(date).getTime())) {
              setErrorHistorical("Ngày không hợp lệ.")
              setLoadingHistorical(false)
              return
         }
        setLoadingHistorical(true)
        setErrorHistorical("Đang tải lịch sử... (Lưu ý: Tính năng này yêu cầu gói trả phí Weatherstack)")
        setHistoricalData(null)

        try {
            const response = await axios.get(`http://api.weatherstack.com/historical`, {
                params: { access_key: apiKey, query: locationQuery, units: 'm', historical_date: date }
            })
            console.log("API Response Historical:", response.data)

            if (response.data.success === false) {
                 if ([105, 604, 615].includes(response.data.error.code)) {
                     throw new Error(`Gói miễn phí không hỗ trợ API Lịch sử (Code: ${response.data.error.code})`)
                 }
                throw new Error(`Weatherstack Error (Historical): ${response.data.error.info} (Code: ${response.data.error.code})`)
            } else if (response.data.historical && response.data.historical[date]) {
                setHistoricalData(response.data.historical[date])
                setErrorHistorical(null)
            } else if (response.data.historical && Object.keys(response.data.historical).length > 0) {
                 setHistoricalData(Object.values(response.data.historical)[0])
                 setErrorHistorical(null)
            }
             else {
                throw new Error(`Không tìm thấy dữ liệu lịch sử cho ngày ${date}.`)
            }
        } catch (err) {
            console.error("Lỗi fetch Historical Weather:", err)
            setErrorHistorical(err.message || "Không thể tải dữ liệu lịch sử.")
        } finally {
            setLoadingHistorical(false)
        }
    }, [apiKey, locationQuery])


    useEffect(() => {
        fetchCurrentWeather()
    }, [fetchCurrentWeather])


    useEffect(() => {
        if (activeTab === 'forecast') {
            fetchForecastWeather()
        } else if (activeTab === 'history') {
            fetchHistoricalWeather(historicalDate)
        }
    }, [activeTab, historicalDate, fetchForecastWeather, fetchHistoricalWeather])

    const getWeatherIcon = (code) => {
        if(code === 113) return <Sun className='w-10 h-10 text-yellow-500'/>
        if(code === 116) return <Cloud className='w-10 h-10 text-gray-400'/>
        if(code === 119 || code === 122) return <Cloud className='w-10 h-10 text-gray-500'/>
        if([176, 263, 266, 293, 296, 299, 302, 305, 308, 353, 356, 359].includes(code)) return <CloudRain className='w-10 h-10 text-blue-500'/>
        if([179, 182, 185, 227, 230, 323, 326, 329, 332, 335, 338, 368, 371].includes(code)) return <CloudSnow className='w-10 h-10 text-blue-200'/>
        return <Thermometer className='w-10 h-10 text-gray-600'/>
    }

    const renderCurrentWeather = () => {
        if (loadingCurrent) return <div className='text-center text-gray-600 p-4'>Đang tải thời tiết hiện tại...</div>
        if (errorCurrent) return <div className='text-center text-red-600 bg-red-100 p-4 rounded-md'>{errorCurrent}</div>
        if (!currentWeatherData) return <div className='text-center text-gray-500 p-4'>Không có dữ liệu.</div>

        const { current, location } = currentWeatherData
        return (
             <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8'>
                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <h3 className='text-xl md:text-2xl font-semibold text-gray-800'>
                        {location.name}, {location.country}
                    </h3>
                    <p className='text-xs md:text-sm text-gray-500 mb-4'>
                        Cập nhật: {new Date(location.localtime).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                        ({current.observation_time} UTC)
                    </p>
                    <div className='flex items-center space-x-2 md:space-x-4 mb-3'>
                        {current.weather_icons && current.weather_icons.length > 0 ? (
                            <img src={current.weather_icons[0]} alt={current.weather_descriptions[0]} className='w-14 h-14 md:w-16 md:h-16'/>
                        ) : (
                            getWeatherIcon(current.weather_code)
                        )}
                        <span className='text-5xl md:text-6xl font-bold text-gray-900'>{current.temperature}°C</span>
                    </div>
                    <p className='text-lg md:text-xl font-medium text-gray-700 capitalize mb-1'>{current.weather_descriptions[0]}</p>
                    <p className='text-sm md:text-md text-gray-600'>Cảm giác như: {current.feelslike}°C</p>
                </div>
                 <div className='w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8 flex-grow'>
                     <h4 className='text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-700 text-center md:text-left'>Chi tiết</h4>
                     <div className='grid grid-cols-2 gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 text-xs md:text-sm'>
                         <div className='flex items-center text-gray-600'><Wind className='w-4 h-4 mr-1.5 text-blue-500'/>Gió: {current.wind_speed} km/h ({current.wind_dir})</div>
                         <div className='flex items-center text-gray-600'><Droplet className='w-4 h-4 mr-1.5 text-cyan-500'/>Độ ẩm: {current.humidity}%</div>
                         <div className='flex items-center text-gray-600'><Eye className='w-4 h-4 mr-1.5 text-gray-500'/>Tầm nhìn: {current.visibility} km</div>
                         <div className='flex items-center text-gray-600'><Gauge className='w-4 h-4 mr-1.5 text-purple-500'/>Áp suất: {current.pressure} mb</div>
                         <div className='flex items-center text-gray-600'><Sun className='w-4 h-4 mr-1.5 text-orange-500'/>UV Index: {current.uv_index}</div>
                         <div className='flex items-center text-gray-600'><Cloud className='w-4 h-4 mr-1.5 text-slate-400'/>Mây: {current.cloudcover}%</div>
                     </div>
                      {current.air_quality && (
                          <div className='mt-3 pt-2 md:mt-4 md:pt-3 border-t border-gray-200'>
                              <h5 className='text-sm md:text-md font-semibold mb-1 md:mb-2 text-gray-700'>Chất lượng không khí (PM2.5)</h5>
                              <p className='text-gray-600 text-xs md:text-sm'>{parseFloat(current.air_quality.pm2_5).toFixed(1)} µg/m³</p>
                          </div>
                      )}
                 </div>
             </div>
        )
    }

    const renderForecastWeather = () => {
         if (loadingForecast) return <div className='text-center text-gray-600 p-4'>Đang tải dự báo...</div>
         if (errorForecast) return <div className='text-center text-red-600 bg-red-100 p-4 rounded-md'>{errorForecast}</div>
         if (!forecastData || !forecastData.forecast) return <div className='text-center text-gray-500 p-4'>Không có dữ liệu dự báo.</div>


        return (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Dự báo 7 ngày tới</h3>
                {Object.entries(forecastData.forecast).map(([date, dayData]) => (
                    <div key={date} className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                        <div className="flex flex-col items-start">
                            <span className="font-semibold text-gray-700">{new Date(date + 'T00:00:00').toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit' })}</span>
                             <span className="text-sm text-gray-500 capitalize">{dayData.day.condition?.text || 'N/A'}</span>
                        </div>
                         <div className="flex items-center space-x-3">
                               {dayData.day.condition?.icon ? (
                                   <img src={dayData.day.condition.icon} alt={dayData.day.condition.text} className="w-10 h-10"/>
                               ) : getWeatherIcon(dayData.day.condition?.code || 113)}
                              <span className="text-lg font-medium text-gray-800">
                                   {dayData.day.maxtemp_c}° / {dayData.day.mintemp_c}°C
                              </span>
                         </div>
                    </div>
                ))}
            </div>
        )
    }

    const renderHistoricalWeather = () => {

        return (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Xem Lịch sử Thời tiết</h3>
                 <div className="flex justify-center items-center space-x-2 mb-4">
                     <label htmlFor="historical-date" className="text-sm font-medium text-gray-700">Chọn ngày:</label>
                     <input
                         type="date"
                         id="historical-date"
                         value={historicalDate}
                         onChange={(e) => setHistoricalDate(e.target.value)}
                          max={formatDateForApi(new Date(Date.now() - 86400000))}
                         className="p-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                     />
                 </div>

                 {loadingHistorical && <div className='text-center text-gray-600 p-4'>Đang tải dữ liệu cho ngày {historicalDate}...</div>}
                 {errorHistorical && <div className='text-center text-red-600 bg-red-100 p-4 rounded-md'>{errorHistorical}</div>}


                {historicalData && !loadingHistorical && !errorHistorical && (
                     <div className='max-w-lg mx-auto bg-white rounded-xl shadow p-5'>
                         <h4 className="text-lg font-semibold mb-3 text-center">
                             Thời tiết ngày {new Date(historicalDate + 'T00:00:00').toLocaleDateString('vi-VN')}
                         </h4>
                         <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center"><Thermometer className="w-4 h-4 mr-1.5 text-red-500"/>Nhiệt độ TB: {historicalData.avgtemp}°C</div>
                              <div className="flex items-center"><Thermometer className="w-4 h-4 mr-1.5 text-red-700"/>Cao nhất: {historicalData.maxtemp}°C</div>
                              <div className="flex items-center"><Thermometer className="w-4 h-4 mr-1.5 text-blue-700"/>Thấp nhất: {historicalData.mintemp}°C</div>
                               <div className="flex items-center"><CloudRain className="w-4 h-4 mr-1.5 text-blue-500"/>Tổng mưa: {historicalData.totalsnow} mm</div>
                         </div>
                     </div>
                )}
                 {!historicalData && !loadingHistorical && !errorHistorical && (
                      <div className='text-center text-gray-500 p-4'>Chọn một ngày để xem dữ liệu.</div>
                 )}
            </div>
        )
    }

    return (
        <section id='weather' className='py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>Thông Tin Thời Tiết</h2>

                <div className="mb-6 flex justify-center space-x-2 border-b border-gray-300 pb-2">
                    <button
                        onClick={() => setActiveTab('current')}
                        className={`px-4 py-2 rounded-t-md text-sm font-medium transition-colors duration-200 ${activeTab === 'current' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Hiện tại
                    </button>
                    <button
                        onClick={() => setActiveTab('forecast')}
                        className={`px-4 py-2 rounded-t-md text-sm font-medium transition-colors duration-200 ${activeTab === 'forecast' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Dự báo
                         <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800" title="Yêu cầu gói trả phí">
                              Pro
                         </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`px-4 py-2 rounded-t-md text-sm font-medium transition-colors duration-200 ${activeTab === 'history' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Lịch sử
                         <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800" title="Yêu cầu gói trả phí">
                              Pro
                         </span>
                    </button>
                </div>

                <div className="mt-4">
                    {activeTab === 'current' && renderCurrentWeather()}
                    {activeTab === 'forecast' && renderForecastWeather()}
                    {activeTab === 'history' && renderHistoricalWeather()}
                </div>

            </div>
        </section>
    )
}

export default Weather