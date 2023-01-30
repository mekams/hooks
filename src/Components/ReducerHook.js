import React, { useReducer } from "react";
const initialState = 0;               //initial state value

//action recieved & further processing it.
const reducer = (state, action) => {
  // console.log(state,action)
  if(action.type === "Inc"){
    return state+1
  }
  if(action.type==="Dec"){
    return state-1;
  }
  
  return state;
};

const ReducerHook = () => {
  //hook is defined
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <div className="sub-container">
      {/* increment and decrement buttons created  and dispatching an action*/}
        <button onClick={()=> dispatch({type:"Dec"})}>Decrement -</button>
        <p className="counter">{state}</p>
        <button onClick={()=>dispatch({type:"Inc"})}>Increment +</button>
      
      </div>
    </div>
  );
};

export default ReducerHook;
