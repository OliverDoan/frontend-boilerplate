import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import Home from 'src/pages/home'
import NotFound from 'src/pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])

export default router
