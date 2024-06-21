import * as React from 'react'

interface useStateValueProps<T, E> {
  error?: E
  data: T | undefined
  isLoading: boolean
  handleError: (error: E) => void
  setValue: (value: T) => void
  toggleLoading: (bool: boolean) => void
}

export const useStateValue = <T, E>(): useStateValueProps<T, E> => {
  const [data, setData] = React.useState<T | undefined>()
  const [error, setError] = React.useState<E | undefined>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const toggleLoading = React.useCallback((bool: boolean) => {
    setIsLoading(bool)
  }, [])

  const setValue = React.useCallback((newData: T) => {
    setData(newData)
  }, [])

  const handleError = React.useCallback((error: E) => {
    setError(error)
  }, [])

  return { isLoading, toggleLoading, setValue, data, error, handleError }
}
