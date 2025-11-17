import { Outlet } from '@kidajs/react-router'
import cx from 'clsx'
import logoUrl from '~/assets/logo.svg?url'
import { ApplicationsProgress } from '~/blocks/ApplicationsProgress'
import { Button } from '~/uikit/Button'
import { Icon } from '~/uikit/Icon'
import { paths } from '~/stores/router'
import { CallToAction } from '~/blocks/CallToAction'
import mixins from '~/uikit/mixins.module.css'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <a
          className={cx(styles.logo, mixins.focusOutline)}
          href={paths.home}
          aria-label='Go to home page'
        >
          <img
            alt='Alt+Shift'
            src={logoUrl}
          />
        </a>
        <div className={styles.actions}>
          <ApplicationsProgress/>
          <Button
            as='a'
            href={paths.home}
            icon={<Icon name='home'/>}
            size='sm'
            aria-label='Go to home page'
          />
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer className={styles.footer}>
        <CallToAction/>
      </footer>
    </div>
  )
}
