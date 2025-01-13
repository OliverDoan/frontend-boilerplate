import RegisterForm from 'src/pages/register/components/register-form'
import { Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>

export default function RegisterPage() {
  const handleSubmit = async (data: FormData) => {
    try {
      console.log('🚀 ~ handleSubmit ~ values:', data)
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
    }
  }
  return (
    <div className='dark:bg-gray-700 h-[calc(100vh-60px)]'>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}
