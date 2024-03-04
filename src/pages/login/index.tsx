import { Button, Form, Input } from 'antd'
import { type Rule } from 'antd/es/form'

type LoginState = {
  username?: string
  password?: string
}
const formRules: Record<keyof LoginState, Rule[]> = {
  username: [{ required: true, message: 'Please input your username!' }],
  password: [{ required: true, message: 'Please input your password!' }]
}
const Login = () => {
  const [form] = Form.useForm<LoginState>()
  const onFinish = (values: LoginState) => {
    console.log('Success:', values)
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label='Username' name='username' rules={formRules.username}>
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
