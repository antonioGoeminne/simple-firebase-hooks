export interface QueryReturn {
  data: unknown
  isLoading: boolean
  error: unknown
  trigger: (value?: unknown) => void
}
