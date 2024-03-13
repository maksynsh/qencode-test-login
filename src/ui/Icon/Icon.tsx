import React from 'react'

import { formatLogoName } from './utils'

import * as logos from './logos'
import * as symbols from './symbols'

type IconsMap = Record<string, React.FC<React.SVGProps<SVGSVGElement>>>

const icons: IconsMap = {
  ...logos,
  ...symbols,
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** icon name. `Icon` suffix is optional in the name. */
  name: keyof typeof icons
  /** CSS classname to forward */
  className?: string
  /** Identification for tests */
  testId?: string
}

export default function Icon({ name, className, testId, ...props }: IconProps) {
  const iconName = formatLogoName(name)

  const Component = icons[iconName]

  return <Component {...props} className={className} data-testid={testId} />
}
