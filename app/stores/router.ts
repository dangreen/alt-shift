import { previous } from 'kida'
import {
  browserNavigation,
  buildPaths,
  virtualNavigation,
  routeParam
} from '@kidajs/router'

export const routes = {
  home: '/',
  newApplication: '/application/new',
  application: '/application/:applicationId'
} as const

export const paths = buildPaths(routes)

export const [$location, navigation] = import.meta.env.STORYBOOK
  ? virtualNavigation('/', routes)
  : browserNavigation(routes)

export const $prevRoute = previous($location.$route)

export const $applicatioId = routeParam($location, 'applicationId')
