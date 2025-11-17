/**
 * Checks if the given error is an abort error.
 * @param error - The error to check.
 * @returns True if the error is an abort error, false otherwise.
 */
export function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.message.includes('abort')
}
