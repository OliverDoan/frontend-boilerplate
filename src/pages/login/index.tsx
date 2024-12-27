import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { schema, Schema } from 'src/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className='dark:bg-gray-700 h-[calc(100vh-60px)]'>
      <form
        className='flex flex-col justify-center h-full max-w-md gap-4 mx-auto'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label className='text-4xl font-extrabold text-gray-800'>Sign in</Label>
        <div>
          <div className='block mb-2'>
            <Label htmlFor='email' value='Your email' />
          </div>
          <TextInput
            id='email'
            type='email'
            placeholder='Enter your email'
            autoComplete='email'
            required
            {...register('email')}
            color={errors.email?.message ? 'failure' : 'gray'}
            helperText={<span className='font-medium'>{errors.email?.message}</span>}
          />
        </div>
        <div>
          <div className='block mb-2'>
            <Label htmlFor='password' value='Your password' />
          </div>
          <TextInput
            id='password'
            type='password'
            placeholder='Enter your password'
            autoComplete='password'
            required
            {...register('password')}
            color={errors.password?.message ? 'failure' : 'gray'}
            helperText={<span className='font-medium'>{errors.password?.message}</span>}
          />
        </div>
        <div className='flex items-center gap-2'>
          <Label>Don't have an account</Label>
          <a href='#' className='ml-1 text-cyan-600 hover:underline dark:text-cyan-500'>
            Register here
          </a>
        </div>
        <Button type='submit'>Log in</Button>
      </form>
    </div>
  )
}
