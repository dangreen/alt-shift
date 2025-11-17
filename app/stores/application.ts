import {
  action,
  signal,
  mountable,
  onMount,
  unshift,
  setIndex,
  deleteIndex,
  atFindIndex
} from 'kida'
import type {
  ApplicationId,
  Application,
  ApplicationDraft
} from '~/services/application.types'
import * as ApplicationService from '~/services/application'
import { isAbortError } from '~/services/common'
import {
  navigation,
  paths,
  $applicatioId
} from './router'

export const $applications = mountable(signal<Application[]>([]))

export const $currentApplication = atFindIndex($applications, ({ id }) => id === $applicatioId())

export const $error = signal<string | null>(null)

export const $loading = signal(false)

const fetchApplications = action(async () => {
  $error(null)

  try {
    const applications = await ApplicationService.fetchApplications()

    $applications(applications)
  } catch (err) {
    $error((err as Error).message)
  }
})

if (!import.meta.env.STORYBOOK) {
  onMount($applications, () => {
    void fetchApplications()
  })
}

/**
 * Creates or updates a job application and generates a cover letter for it.
 * @param draft - The application draft to create or update.
 * @param signal - Optional AbortSignal to cancel the request.
 */
export const createOrUpdateApplication = action(async (
  draft: ApplicationDraft,
  signal?: AbortSignal
) => {
  $error(null)
  $loading(true)

  try {
    const isNew = !draft.id
    const letter = await ApplicationService.createLetter(draft, signal)
    const application = await ApplicationService.createOrUpdateApplication({
      ...draft,
      letter
    })

    if (isNew) {
      unshift($applications, application)

      navigation.push(paths.application({
        applicationId: application.id
      }))
    } else {
      const index = $applications().findIndex(a => a.id === application.id)

      setIndex($applications, index, application)
    }
  } catch (err) {
    if (!isAbortError(err)) {
      $error((err as Error).message)
    }
  } finally {
    $loading(false)
  }
})

/**
 * Creates or updates a job application in an abortable way.
 * @param draft - The application draft to create or update.
 * @returns An AbortController that can be used to cancel the operation.
 */
export const createOrUpdateApplicationAbortable = action((draft: ApplicationDraft) => {
  const controller = new AbortController()

  void createOrUpdateApplication(draft, controller.signal)

  return controller
})

/**
 * Deletes a job application.
 * @param id - The ID of the application to delete.
 */
export const deleteApplication = action(async (id: ApplicationId) => {
  $error(null)

  try {
    await ApplicationService.deleteApplication(id)

    const index = $applications().findIndex(a => a.id === id)

    if (index !== -1) {
      deleteIndex($applications, index)
    }

    navigation.push(paths.home)
  } catch (err) {
    $error((err as Error).message)
  }
})
