import { useState,useCallback,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed] =useState(false)
  const [charAllowed,setCharAllowed] =useState(false)
  const [password,setPassword]=useState("")

  // useRef Hook
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass = ""
    let str="ABCDEFGHIJKLMNNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str+="0123456789"
    }
    if (charAllowed){
      str+="!@#$%^&*()+=_-{}[]~`/"
    }
    for(let i=0;i<=length;i++){
      let char =Math.floor((Math.random()*str.length))
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my5 text-black bg-gray-600  ">
      <h4 className='text-center px-5 py-5'>Password generator</h4>
      <div clssName="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className='px-3 py-5 outline-none w-full rounded-3xl bg-white' placeholder='Password' readOnly ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flec text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input onChange={(e)=>{setLength(e.target.value)}} type="range" min={6} max={100} value={length} className='cursor-pointer mt-3'/>
          <label className='mr-4 mt-2'>Length: {length}</label>
          <input defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} className=" mt-3" type="checkbox" />
          <label className='mr-4 mt-2' >Numbers</label>
          <input defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}} className=" mt-3" type="checkbox" />
          <label className='mr-4 mt-2' >Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App