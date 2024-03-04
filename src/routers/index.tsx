import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import Home from 'src/pages/home'
import Login from 'src/pages/login'
import NotFound from 'src/pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> }
    ],
    errorElement: <NotFound />
  }
])

export default router
