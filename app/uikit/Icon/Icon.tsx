import type { SVGAttributes } from 'react'
import spriteUrl from '~/assets/sprite.svg?no-inline'

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: 'copy' | 'flower' | 'home' | 'plus' | 'retry' | 'trash' | 'check'
  width?: number
  height?: number
}

export function Icon({
  name,
  width,
  height,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden='true'
      {...props}
    >
      <use xlinkHref={`${spriteUrl}#${name}`}/>
    </svg>
  )
}
