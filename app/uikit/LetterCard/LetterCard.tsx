import cx from 'clsx'
import {
  type PaperProps,
  Paper
} from '../Paper'
import styles from './LetterCard.module.css'

export interface LetterCardProps extends Omit<PaperProps, 'color' | 'as'> {}

export function LetterCard({
  className,
  children,
  ...props
}: LetterCardProps) {
  return (
    <Paper
      as='article'
      className={cx(
        styles.root,
        className
      )}
      {...props}
    >
      {children}
    </Paper>
  )
}
