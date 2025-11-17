import { useSignal } from '@kidajs/react'
import { $applications } from '~/stores/application'
import {
  type LetterCardGridProps,
  LetterCardGrid
} from '~/uikit/LetterCardGrid'
import { ApplicationCard } from '~/blocks/ApplicationCard'

export interface ApplicationsGridProps extends LetterCardGridProps {}

export function ApplicationsGrid(props: ApplicationsGridProps) {
  const applications = useSignal($applications)

  return (
    <LetterCardGrid {...props}>
      {applications.map(application => (
        <ApplicationCard
          key={application.id}
          application={application}
        />
      ))}
    </LetterCardGrid>
  )
}
