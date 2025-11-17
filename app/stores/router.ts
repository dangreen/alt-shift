import { previous } from 'kida'
import {
  browserNavigation,
  buildPaths,
  virtualNavigation,
  routeParam,
  basePath
} from '@kidajs/router'

export const routes = basePath(import.meta.env.BASE_URL, {
  home: '/',
  newApplication: '/application/new',
  application: '/application/:applicationId'
})

export const paths = buildPaths(routes)

export const [$location, navigation] = import.meta.env.STORYBOOK
  ? virtualNavigation('/', routes)
  : browserNavigation(routes)

export const $prevRoute = previous($location.$route)

export const $applicatioId = routeParam($location, 'applicationId')

if (import.meta.env.VITE_GITHUB_PAGES) {
  const redirectTo = sessionStorage.getItem('redirect')

  if (redirectTo) {
    navigation.replace(redirectTo)
    sessionStorage.removeItem('redirect')
  }
}
