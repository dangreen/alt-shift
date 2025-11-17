import type { HTMLAttributes } from 'react'
import cx from 'clsx'
import styles from './Thinker.module.css'

export interface ThinkerProps extends HTMLAttributes<HTMLDivElement> {
  label: string
}

export function Thinker({
  className,
  label,
  ...props
}: ThinkerProps) {
  return (
    <div
      className={cx(
        styles.root,
        className
      )}
      role='status'
      aria-label={label}
      {...props}
    >
      <div className={styles.blur}/>
      <div className={styles.sphere}/>
    </div>
  )
}
