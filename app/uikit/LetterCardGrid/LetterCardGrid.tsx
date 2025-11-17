import type { HTMLAttributes } from 'react'
import cx from 'clsx'
import styles from './LetterCardGrid.module.css'

export interface LetterCardGridProps extends HTMLAttributes<HTMLElement> {}

export function LetterCardGrid({
  className,
  children,
  ...props
}: LetterCardGridProps) {
  return (
    <div
      className={cx(
        styles.root,
        className
      )}
      role='list'
      {...props}
    >
      {children}
    </div>
  )
}
