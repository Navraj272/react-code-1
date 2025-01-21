import { useEffect } from "react"
import { useCallback } from "react"
import { useState,useRef } from "react"


function App() {
  const [password,setPassword]=useState("")
  const [numbers,setNumbers]=useState(false)
  const [length,setLength]=useState(8)
  const [charecters,setCharecters]=useState(false)

  const reff=useRef(null)

const passwordGenerator=useCallback(()=>{
  let totalcharecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let finalpassw = ""
  if(numbers) totalcharecters += "1234567890"
  if(charecters) totalcharecters += "~`!@#$%^&*()_+[]{}:;'></?"

    for(let i=1;i<length;i++){
      let pos = Math.floor(Math.random()*totalcharecters.length+1)
      finalpassw += totalcharecters.charAt(pos)
    }
    setPassword(finalpassw)
},[numbers,length,charecters])

const handler=useCallback(()=>{
  reff.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[numbers,length,charecters])

  return (
    <div className="w-full max-w-md shadow-md
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
      <h1 className="text-white text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg w-full
      overflow-hidden mb-4">

          <input type="text"
            value={password}
            className="outline-none w-96 py-1 px-3"
            placeholder="Password"
            readOnly
            ref={reff}
          
          />
        <button className="outline-none bg-blue-700
        text-white px-3 py-0.5 shrink-0"
        onClick={handler} >
          Copy
        </button>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            max={50}
            min={7}
            value={length}
            className="cursor-pointer"
            onChange={ (e) =>setLength(e.target.value)}
            />
            <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numbers}            
              id="numberInput"
              onChange={ () => setNumbers((prev)=>(!prev))}
            />
            <label >Numbers : </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numbers}            
              id="numberInput"
              onChange={ () => setCharecters((prev)=>(!prev))}
            />
            <label >Charecters : </label>
          </div>

        </div>


      </div>

    </div>
  )
}

export default App
