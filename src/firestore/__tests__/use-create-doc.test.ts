// que si hay id que ejecute setDoc
// que si no hay id que ejecut addDoc
// que si hay un error ejecute handleError
// que si se crea el nuevo doc data tengo valor y loading esté en false

import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { db } from '../../../tests/firebase'
import { useCreateDoc } from '../use-create-doc'

describe('useCreateDoc', () => {
  it('should create the document with the same id given', async () => {
    const { result } = renderHook(() =>
      useCreateDoc({ db, index: 'test', id: 'bo' })
    )

    act(() => {
      result.current.trigger({
        city: 'marruecos'
      })
    })
    await waitFor(() => result.current.isLoading === false)

    expect(result.current.data).toEqual('bo')
  })
})
