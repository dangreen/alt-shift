import type { HTMLAttributes } from 'react'
import cx from 'clsx'
import styles from './LetterCard.module.css'

export interface LetterCardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function LetterCardFooter({
  className,
  children,
  ...props
}: LetterCardFooterProps) {
  return (
    <div
      className={cx(
        styles.footer,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
