import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useStateValue } from '../useStateValue'

describe('useStateValue', () => {
  it('should return new Data when update setValue', () => {
    const { result } = renderHook(() => useStateValue())
    expect(result.current.data).toBe(undefined)

    act(() => {
      result.current.setValue([1, 2, 3])
    })
    expect(result.current.data).toStrictEqual([1, 2, 3])
  })

  it('should return isLoading in true when update', () => {
    const { result } = renderHook(() => useStateValue())
    expect(result.current.isLoading).toBe(false)

    act(() => {
      result.current.toggleLoading(true)
    })
    expect(result.current.isLoading).toStrictEqual(true)
  })

  it('error should contain some value when update', () => {
    const { result } = renderHook(() => useStateValue())
    expect(result.current.error).toBe(undefined)

    act(() => {
      result.current.handleError('something happens')
    })
    expect(result.current.error).not.toBeUndefined()
  })
})
