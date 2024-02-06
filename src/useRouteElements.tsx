import { useRoutes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <div>hello</div>
    },
    {
      path: '/login',
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      )
    },
    {
      path: '/register',
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      )
    }
  ])
  return routeElements
}
