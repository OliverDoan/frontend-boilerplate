import { ConfigProvider } from 'antd'
import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import Home from 'src/pages/home'
import NotFound from 'src/pages/not-found'
import type { ThemeConfig } from 'antd'
// import { theme } from 'antd'

// const { getDesignToken, useToken } = theme
// const globalToken = getDesignToken(config)
const config: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: 'yellow',
      algorithm: true // Enable algorithm
    },
    Input: {
      colorPrimary: 'green',
      algorithm: true // Enable algorithm
    }
  },
  token: {
    // Seed Token
    colorPrimary: 'red',
    borderRadius: 2,

    // Alias Token
    colorBgContainer: '#f6ffed'
  }
}
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ConfigProvider theme={config}>
        <App />
      </ConfigProvider>
    ),
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
