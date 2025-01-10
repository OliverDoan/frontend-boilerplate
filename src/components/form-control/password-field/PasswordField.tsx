import { Checkbox, Label, TextInput } from 'flowbite-react'
import { InputHTMLAttributes, useState } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface PasswordFieldProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'form'> {
  name: Path<T>
  form: {
    control: Control<T>
  }
}

export default function PasswordField<T extends FieldValues>({ form, name, ...rest }: PasswordFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const { control } = form

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => {
        return (
          <div>
            <TextInput
              {...rest}
              type={showPassword ? 'text' : 'password'}
              helperText={<span className='font-medium'>{error?.message}</span>}
              color={error?.message ? 'failure' : 'gray'}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <div className='flex items-center gap-2 mt-2'>
              <Checkbox id='showPassword' onClick={togglePasswordVisibility} />
              <Label htmlFor='showPassword'>Show password</Label>
            </div>
          </div>
        )
      }}
    />
  )
}
