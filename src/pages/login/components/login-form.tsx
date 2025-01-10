import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Label } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import InputField from 'src/components/form-control/input-field/InputField'
import PasswordField from 'src/components/form-control/password-field/PasswordField'
import { schema, Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function LoginForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const form = useForm({
    resolver: yupResolver(loginSchema)
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
      <Label className='text-4xl font-extrabold text-gray-800'>Sign in</Label>
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

      <div className='flex items-center gap-2'>
        <Label>Don't have an account</Label>
        <a href='#' className='ml-1 text-cyan-600 hover:underline dark:text-cyan-500'>
          Register here
        </a>
      </div>
      <Button type='submit' disabled={isSubmitting}>
        Log in
      </Button>
    </form>
  )
}
