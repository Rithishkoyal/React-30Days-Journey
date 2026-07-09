import { useState } from 'react'
import UseStateHook from './components/UseStateHook'
import ToggleText from './components/ToggleText'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Counter App</h1>

    <h2>{count}</h2>
   <button onClick={()=> setCount(count+1)}>
    Increase
   </button>
 <button onClick={()=> (count >0 ? setCount(count-1) : setCount(0))} 
    >
  Decrease
    </button>
    <button onClick={()=> setCount(0)}>
     Reset
    </button>

    <UseStateHook/>
    <ToggleText/>
   </>
  )
}

export default App
