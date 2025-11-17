import type {
  JSX,
  ComponentPropsWithRef
} from 'react'

/**
 * Represents any valid HTML element type.
 */
export type ElementType = keyof JSX.IntrinsicElements

/**
 * Props for a component that can render as a different HTML element.
 */
export type AsElementProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithRef<T>
