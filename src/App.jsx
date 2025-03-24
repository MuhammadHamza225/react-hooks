import { useState } from 'react'

import './App.css'
// import UseState from './components/UseState/UseState'
import SignUp from './components/UseState/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/* <UseState/> */}
      <SignUp/>
      </div>
      
    </>
  )
}

export default App
