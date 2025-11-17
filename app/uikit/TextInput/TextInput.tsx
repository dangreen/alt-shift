import type { InputHTMLAttributes } from 'react'
import cx from 'clsx'
import typography from '../typography.module.css'
import mixins from '../mixins.module.css'
import styles from './TextInput.module.css'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search'
}

export function TextInput({
  className,
  type = 'text',
  ...props
}: TextInputProps) {
  return (
    <input
      type={type}
      className={cx(
        styles.root,
        typography.text,
        typography.md,
        mixins.focusOutline,
        className
      )}
      {...props}
    />
  )
}
