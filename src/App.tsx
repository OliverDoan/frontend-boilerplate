import { Route, Routes } from 'react-router-dom'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
