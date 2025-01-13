import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Label } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import InputField from 'src/components/form-control/input-field/InputField'
import PasswordField from 'src/components/form-control/password-field/PasswordField'
import { schema, Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function RegisterForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const form = useForm({
    resolver: yupResolver(registerSchema)
  })

  const { isSubmitting } = form.formState

  const handleSubmit = async (values: FormData) => {
    if (onSubmit) {
      await onSubmit(values)
    }
  }

  return (
    <form
      className='flex flex-col justify-center h-full max-w-md gap-4 mx-auto'
      noValidate
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Label className='text-4xl font-extrabold text-gray-800'>Sign up</Label>
      <div>
        <div className='block mb-2'>
          <Label htmlFor='email' value='Your email' />
        </div>
        <InputField form={form} name='email' placeholder='Enter your email' type='email' />
      </div>
      <div>
        <div className='block mb-2'>
          <Label htmlFor='password' value='Your password' />
        </div>
        <PasswordField form={form} name='password' placeholder='Enter your password' />
      </div>
      <div>
        <div className='block mb-2'>
          <Label htmlFor='confirm_password' value='Your confirm password' />
        </div>
        <InputField form={form} name='confirm_password' placeholder='Enter your confirm password' />
      </div>

      <div className='flex items-center gap-2'>
        <Label>Already have an account?</Label>
        <Link to={'/login'}>
          <a href='#' className='ml-1 text-cyan-600 hover:underline dark:text-cyan-500'>
            Login
          </a>
        </Link>
      </div>
      <Button type='submit' disabled={isSubmitting}>
        Register new account
      </Button>
    </form>
  )
}
