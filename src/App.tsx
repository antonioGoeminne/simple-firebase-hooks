import './App.css'

import { db } from '../tests/firebase'
import { Button } from './button'
import { useCreateDoc } from './firestore/use-create-doc'
import { useEvent } from './hooks/useEvent'

function App() {
  const { trigger, isLoading } = useCreateDoc({ index: 'test', db })

  const onClick = useEvent(async () => await trigger({ test: 'city' }))

  return (
    <div>
      <Button onClick={onClick}>boton</Button>
      {isLoading && <p>loading ...</p>}
    </div>
  )
}

export default App
