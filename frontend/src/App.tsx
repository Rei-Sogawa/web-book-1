import { httpsCallable } from 'firebase/functions'
import { useEffect } from 'react'

import { functions } from './firebaseApp'

function App() {
  useEffect(() => {
    httpsCallable(functions, 'hello')().then((res) => console.log(res))
    httpsCallable(functions, 'goodBye')().then((res) => console.log(res))
    httpsCallable(functions, 'goodEvening')().then((res) => console.log(res))
  }, [])

  return <div>App Component</div>
}

export default App
