import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import ErrorPage from 'src/pages/error'
import Home from 'src/pages/home'
import Login from 'src/pages/login'
import { appRouters } from './AppRouters'
import FormPage from 'src/pages/form'

const router = createBrowserRouter([
  {
    path: appRouters.public.home,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: appRouters.auth.login, element: <Login /> },
      { path: appRouters.public.form, element: <FormPage /> }
    ],
    errorElement: <ErrorPage />
  }
])

export default router
