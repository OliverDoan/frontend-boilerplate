import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { appRouters } from 'src/routers/AppRouters'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={() => navigate(appRouters.public.home)}>
          Back Home
        </Button>
      }
    />
  )
}

export default ErrorPage
