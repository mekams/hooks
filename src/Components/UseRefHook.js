import React, { useEffect, useRef, useState } from "react";

// create a mutable variable which willnot re-render the components
//to access the dom elments directly

const UseRefHook = () => {
  const [myData, setMyData] = useState("");
//   const [count, setCount] = useState(0);    //creating problem of infinite loop with this

    const count =useRef(0)
    console.log(count)     //displaying object "current" in browser console

    const stylish =useRef("")
    console.log(stylish)    //dom element access

    useEffect(()=>{
        // setCount(count+1)   //problem here
       count.current = count.current+1          //by useref as it returns an object named current 
    })

   const changeStyle=()=>{
        stylish.current.style.backgroundColor="#82e3aa"                       //dom element acces
        stylish.current.focus()                       //dom element acces
    }

  return (
    <div className="Container-UseRef">
      <input
        ref ={stylish}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>Submit</button>

      <p> The number of times it renders : {count.current}</p>
    </div>
  );
};

export default UseRefHook;
