import { TextInput } from 'flowbite-react'
import { InputHTMLAttributes } from 'react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface InputFieldProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'form'> {
  name: Path<T>
  form: {
    control: Control<T>
  }
}

export default function InputField<T extends FieldValues>({ form, name, ...rest }: InputFieldProps<T>) {
  const { control } = form

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => {
        return (
          <TextInput
            helperText={<span className='font-medium'>{error?.message}</span>}
            color={error?.message ? 'failure' : 'gray'}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
          />
        )
      }}
    />
  )
}
