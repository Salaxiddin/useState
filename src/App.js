import React ,{useState}from 'react'
import "./App.css"


export default function App() {
  let [numbers,setNumbers] =useState([1,2,3,4,5,6])

  const addNumbers = ()=>{
    const randomNum = Math.round(Math.random()*100)
      setNumbers([...numbers,randomNum])
  }

  return (
   <div>
      <ul>
          {numbers.map((num,index)=>
            <li key={index}>{num}</li>
          )}
      </ul>
      <button onClick={addNumbers}>Add number</button>
   </div>
  )
}
