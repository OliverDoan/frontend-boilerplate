import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import LoginForm from 'src/pages/login/components/login-form'
import { login } from 'src/redux/reducer/user.reducer'
import { useAppDispatch } from 'src/redux/store'
import { Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (data: FormData) => {
    try {
      const res = await dispatch(
        login({
          email: data.email,
          password: data.password
        })
      )
      unwrapResult(res)
      enqueueSnackbar('Login successfully!!! 🎉', { variant: 'success' })
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
