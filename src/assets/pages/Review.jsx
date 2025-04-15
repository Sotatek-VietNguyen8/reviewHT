import React, { useEffect, useState } from 'react'
import CardBoard from '../components/cardBoard'
import FooterPages from '../components/FooterPages'
import Content from '../components/Content'
import Travel from '../components/Travel'
import Coffee from '../components/Coffee'
import History from '../components/History'
import Food from '../components/Food'
import News from '../components/news'
import Weather from '../components/weather'
import Loading from '../components/Loading'
const Review = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=> {
    const timer = setTimeout(()=> {
      setIsLoading(false)
    }, 2500)
    return ()=>clearTimeout(timer)
  },[])
  return (
    <div>
      {isLoading ? (
        <Loading/>
      ):(
        <>
          <CardBoard/>
        <Content/>
        <History/>
        <Travel/>
        <Food/>
        <Coffee/>
        <News/>
        <Weather/>
        <FooterPages/>
        </>
      )}
    </div>
  )
}

export default Review
