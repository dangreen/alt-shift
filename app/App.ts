import {
  onMount,
  onMountEffect
} from 'kida'
import {
  app,
  page,
  layout,
  listenLinks,
  resetScroll
} from '@kidajs/react-router'
import {
  $location,
  $prevRoute,
  navigation
} from './stores/router'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { Application } from './pages/Application'

onMount($location, () => listenLinks(navigation))

onMountEffect($location, (initial) => {
  const shouldReset = (
    $prevRoute() !== 'newApplication'
    || $location.$route() !== 'application'
  ) && !initial

  if (shouldReset) {
    resetScroll()
  }
})

export const App = app($location, [
  layout(Layout, [
    page('home', Home),
    page('newApplication', Application),
    page('application', Application)
  ])
])
