import LoginForm from 'src/pages/login/components/login-form'
import { Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>

export default function LoginPage() {
  const handleSubmit = async (data: FormData) => {
    try {
      console.log('🚀 ~ handleSubmit ~ values:', data)
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
    }
  }
  return (
    <div className='dark:bg-gray-700 h-[calc(100vh-60px)]'>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}
