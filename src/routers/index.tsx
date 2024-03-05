import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import Home from 'src/pages/home'
import Login from 'src/pages/login'
import NotFound from 'src/pages/not-found'
import UserManagement from 'src/pages/user-management'
import { appRouters } from './AppRouters'
import DetailUser from 'src/pages/user-management/detail'

export function ProtectedRoute() {
  const isAuthenticated = JSON.parse(localStorage.getItem('token')!)
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const router = createBrowserRouter([
  {
    path: appRouters.public.home,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: appRouters.auth.login, element: <Login /> },
      {
        path: appRouters.user.listUser,
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <UserManagement />
          },
          { path: appRouters.user.detail, element: <DetailUser /> }
        ]
      }
    ],
    errorElement: <NotFound />
  }
])

export default router
