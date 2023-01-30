import React, { useEffect, useState } from 'react'

const initialState = 0    // initial state declared

const UseffectHook = () => {
    const [count,setCount] = useState(initialState);   // useState hook used

    useEffect(()=>{
       return () => { console.log("You clicked")}   //renders only once if we use return
    },[count])    //if  blank array then only on first render it will run and at no array at every render
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

export default UseffectHook
