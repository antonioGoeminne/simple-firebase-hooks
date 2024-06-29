import * as React from 'react'

import { useEvent } from './useEvent'

interface State<T, E> {
  data: T | undefined
  error: E | undefined
  isLoading: boolean
}

type Action<T, E> =
  | { type: 'SET_VALUE'; payload: T }
  | { type: 'SET_ERROR'; payload: E }
  | { type: 'TOGGLE_LOADING'; payload: boolean }

const initialState = <T, E>(): State<T, E> => ({
  data: undefined,
  error: undefined,
  isLoading: false
})

const reducer = <T, E>(
  state: State<T, E>,
  action: Action<T, E>
): State<T, E> => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, data: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'TOGGLE_LOADING':
      return { ...state, isLoading: action.payload }
  }
}

interface useStateValueProps<T, E> {
  error?: E | unknown
  data: T | unknown
  isLoading: boolean
  handleError: (error: E) => void
  setValue: (value: T) => void
  toggleLoading: (bool: boolean) => void
}

export const useStateValue = <T, E>(): useStateValueProps<T, E> => {
  const [state, dispatch] = React.useReducer(reducer, initialState<T, E>())

  const toggleLoading = useEvent((bool: boolean) => {
    dispatch({ type: 'TOGGLE_LOADING', payload: bool })
  })

  const setValue = useEvent((newData: T) => {
    dispatch({ type: 'SET_VALUE', payload: newData })
  })

  const handleError = useEvent((error: E) => {
    dispatch({ type: 'SET_ERROR', payload: error })
  })

  return {
    isLoading: state.isLoading,
    toggleLoading,
    setValue,
    data: state.data,
    error: state.error,
    handleError
  }
}
