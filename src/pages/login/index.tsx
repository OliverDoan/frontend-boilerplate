import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import LoginForm from 'src/pages/login/components/login-form'
import { Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>

export default function LoginPage() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (data: FormData) => {
    try {
      console.log('🚀 ~ handleSubmit ~ data:', data)
      enqueueSnackbar('Login successfully!!! 🎉', { variant: 'success' })
      navigate('/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('🚀 ~ handleSubmit ~ error:', error)
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }
  return (
    <div className='dark:bg-gray-700 h-[calc(100vh-60px)]'>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}
