import { Route, Routes } from 'react-router-dom'
import Review from './assets/pages/Review'
import Navbar from './assets/components/Navbar'
import LoginPage from './Admin/Login'
import PostNews from './Admin/PostNews'
import { useAuthStore } from './assets/store/useAuthStore'
import { useEffect } from 'react'
import ResetPsw from './Admin/ResetPsw'

function App() {
  const {authUser, checkAuth} = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  console.log({ authUser })
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Review/>
        }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/resetPsw" element={<ResetPsw />} />
        <Route path="/postNews" element={<PostNews />} />
      </Routes>
    </div>
  )
}

export default App
