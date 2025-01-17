import RegisterForm from 'src/pages/register/components/register-form'
import { Schema } from 'src/utils/rules'
import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'src/redux/store'
import { register } from 'src/redux/reducer/user.reducer'
import { useSnackbar } from 'notistack'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>

export default function RegisterPage() {
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (data: FormData) => {
    try {
      const res = await dispatch(
        register({
          email: data.email,
          password: data.password,
          avatar: 'https://picsum.photos/800',
          name: data.email
        })
      )
      unwrapResult(res)
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
