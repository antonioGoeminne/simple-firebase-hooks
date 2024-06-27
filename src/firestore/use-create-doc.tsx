import { type Firestore } from 'firebase/firestore'

import { type QueryReturn } from '../../types'
import { useStateValue } from '../hooks/useStateValue'
import { AddDoc, FirestoreProcessor, SetDoc } from './firestoreStrategy'

interface UseCreateDocsProps {
  id?: string
  index: string
  db: Firestore
}

export const useCreateDoc = ({
  db,
  index,
  id
}: UseCreateDocsProps): QueryReturn => {
  const { data, error, isLoading, setValue, toggleLoading, handleError } =
    useStateValue()
  const processor = new FirestoreProcessor()

  const postDoc = async (payload: unknown) => {
    try {
      toggleLoading(true)

      if (id) {
        processor.setStrategy(new SetDoc(db, index, id))

        const newDocId = await processor.trigger(payload)
        setValue(newDocId)
      }

      processor.setStrategy(new AddDoc(db, index))
      const newDocId = await processor.trigger(payload)
      setValue(newDocId)

      toggleLoading(false)
    } catch (error) {
      handleError(error)
      toggleLoading(false)
    }
  }

  return { trigger: postDoc, data, isLoading, error }
}
