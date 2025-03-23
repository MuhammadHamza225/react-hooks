import { useState } from 'react'

import './App.css'
import UseState from './components/UseState/UseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <UseState/>
      </div>
      
    </>
  )
}

export default App
