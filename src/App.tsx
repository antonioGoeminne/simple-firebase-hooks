import './App.css'

import { db } from '../tests/firebase'
import { useCreateDoc } from './firestore/use-create-doc'

function App() {
  const { trigger, isLoading } = useCreateDoc({ index: 'test', db, id: 'bo' })

  if (isLoading) return <p>loading...</p>

  return <div onClick={() => trigger({ 'city.1': 'london' })}>Hola mundo</div>
}

export default App
