import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import Home from 'src/pages/home'
import Login from 'src/pages/login'
import NotFound from 'src/pages/not-found'
import UserManagement from 'src/pages/user-management'

export function ProtectedRoute() {
  const isAuthenticated = JSON.parse(localStorage.getItem('token')!)
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      {
        path: '/user',
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <UserManagement />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
])

export default router
