import { Route, Routes } from 'react-router-dom'
import Layout from 'src/components/layout'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'

// Styles
import './app.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
