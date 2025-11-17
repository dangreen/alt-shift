export type ApplicationId = string

/**
 * Represents a job application.
 */
export interface Application {
  id: ApplicationId
  title: string
  company: string
  skills: string
  details: string
  letter: string
  createdAt: number
}

/**
 * Represents a draft of a job application.
 */
export interface ApplicationDraft extends Omit<Application, 'id' | 'createdAt'> {
  id?: ApplicationId
  createdAt?: number
}
