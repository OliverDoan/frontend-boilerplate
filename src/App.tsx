import { Route, Routes } from 'react-router-dom'
import Layout from 'src/components/layout'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'
import NotFoundPage from 'src/pages/not-found'
import RegisterPage from 'src/pages/register'

// Styles
import './app.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
