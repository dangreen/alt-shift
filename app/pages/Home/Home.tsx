import typography from '~/uikit/typography.module.css'
import { SubHeader } from '~/uikit/SubHeader'
import { Button } from '~/uikit/Button'
import { Icon } from '~/uikit/Icon'
import { ApplicationsGrid } from '~/blocks/ApplicationsGrid'
import { paths } from '~/stores/router'
import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.root}>
      <SubHeader title={<h1 className={typography.h1}>Applications</h1>}>
        <Button
          className={styles.button}
          as='a'
          href={paths.newApplication}
          icon={<Icon name='plus'/>}
          size='md'
          variant='primary'
          aria-label='Create New'
        >
          Create New
        </Button>
      </SubHeader>
      <ApplicationsGrid/>
    </section>
  )
}
