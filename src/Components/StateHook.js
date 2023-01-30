import React, { useEffect, useState } from 'react'

const initialState = 0    // initial state declared

const StateHook = () => {
    const [count,setCount] = useState(initialState);   // useState hook used
    
  return (
      <div className="container">
      <div className="sub-container">
      {/* increment and decrement buttons created  and chanfing states*/}
        <button onClick={()=> setCount(count-1)}>Decrement -</button>
        <p className="counter">{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment +</button>
    </div>
    </div>
  )
}

export default StateHook
