import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import Home from 'src/pages/home'
import Login from 'src/pages/login'
import ErrorPage from 'src/pages/error-page'
import { appRouters } from './AppRouters'

const router = createBrowserRouter([
  {
    path: appRouters.public.root,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: appRouters.auth.login,
        element: <Login />
      }
    ]
  }
])

export default router
