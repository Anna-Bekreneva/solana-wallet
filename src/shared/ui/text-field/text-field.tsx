import {ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId} from 'react'

import s from './text-field.module.scss'

export type Props = {
  errorMessage?: string
  onValueChange?: (value: string) => void
  label?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {className, label, id, errorMessage, onValueChange, ...rest} = props

  const finalId = id ?? useId()
  const errorFinalId = `${finalId}-error`

  const fieldClassName = `${s.field} ${errorMessage ? s.error : ''}`

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onValueChange?.(e.currentTarget.value)

  return (
    <div>
      {label && <label className={'sr-only'} htmlFor={finalId}>{label}</label>}
      <input
        id={finalId}
        ref={ref}
        aria-invalid={!!errorMessage}
        className={fieldClassName}
        onChange={changeHandler}
        aria-describedby={errorMessage ? errorFinalId : undefined}
        {...rest}
      />
      {errorMessage && (
        <p
          role="alert"
          aria-live={'assertive'}
          className={'error'}
          id={errorFinalId}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
})
