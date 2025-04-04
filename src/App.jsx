import { Route, Routes } from 'react-router-dom'
import Review from './assets/pages/Review'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Review/>
        }
        />
      </Routes>
    </div>
  )
}

export default App
