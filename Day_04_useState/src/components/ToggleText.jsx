import React,{useState} from 'react'

const ToggleText = () => {
    const [show,setShow] = useState(true);
  return (
    <div>
        
      {show && <h2>Hello React</h2>}
      <button onClick={()=> setShow(!show)}>
            Toggle

        </button>
    </div>
  )
}

export default ToggleText
