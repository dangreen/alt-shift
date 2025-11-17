import { previous } from 'kida'
import {
  browserNavigation,
  buildPaths,
  virtualNavigation,
  routeParam
} from '@kidajs/router'

const base = (import.meta.env.BASE_URL?.replace(/\/$/, '') || '') as ''

export const routes = {
  home: `${base}/`,
  newApplication: `${base}/application/new`,
  application: `${base}/application/:applicationId`
} as const

export const paths = buildPaths(routes)

export const [$location, navigation] = import.meta.env.STORYBOOK
  ? virtualNavigation('/', routes)
  : browserNavigation(routes)

export const $prevRoute = previous($location.$route)

export const $applicatioId = routeParam($location, 'applicationId')
