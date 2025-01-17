import RegisterForm from 'src/pages/register/components/register-form'
import { Schema } from 'src/utils/rules'
import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'src/redux/store'
import { register } from 'src/redux/reducer/user.reducer'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>

export default function RegisterPage() {
  const dispatch = useAppDispatch()
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
      console.log(unwrapResult(res))
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
