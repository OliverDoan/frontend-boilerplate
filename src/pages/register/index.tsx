import { useSnackbar } from 'notistack'
import RegisterForm from 'src/pages/register/components/register-form'
import { Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>

export default function RegisterPage() {
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (data: FormData) => {
    try {
      console.log('🚀 ~ handleSubmit ~ data:', data)
      enqueueSnackbar('Register successfully!!! 🎉', { variant: 'success' })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }
  return (
    <div className='dark:bg-gray-700 h-[calc(100vh-60px)]'>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}
