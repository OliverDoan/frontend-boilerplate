import { Button, Form, Input } from 'antd'
import { type Rule } from 'antd/es/form'
import { useNavigate } from 'react-router-dom'
import authApi from 'src/apis/authApi'
import { appRouters } from 'src/routers/AppRouters'

type LoginState = {
  email: string
  password: string
}
const formRules: Record<keyof LoginState, Rule[]> = {
  email: [{ required: true, message: 'Please input your email!' }],
  password: [{ required: true, message: 'Please input your password!' }]
}
const Login = () => {
  const [form] = Form.useForm<LoginState>()
  const navigate = useNavigate()
  const onFinish = async () => {
    const values = await form.validateFields()
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
    try {
      const { data } = await authApi.login(values)
      console.log('🚀 ~ handleLogin ~ data:', data)
      localStorage.setItem('token', JSON.stringify(data))
      navigate(appRouters.public.home)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('🚀 ~ handleLogin ~ error:', error.response.data)
    }
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label='Username' name='username' rules={formRules.email}>
        <Input />
      </Form.Item>
      <Form.Item label='Password' name='password' rules={formRules.password}>
        <Input.Password />
      </Form.Item>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default Login
