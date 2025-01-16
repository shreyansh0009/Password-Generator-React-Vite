import React from 'react'
import { useState, useEffect } from 'react'

function App() {

  const [length, setlength] = useState(8)
  const [noAllowed, setnoAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState('')

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    let characters = lower + upper;
    if (noAllowed) characters += numbers;
    if (charAllowed) characters += symbols;

    let newPassword = "";
    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, noAllowed, charAllowed]);
  
  return (
    <div className='w-full h-screen bg-black p-5 flex flex-col items-center overflow-hidden'>
      
      <h1 className='w-full h-20 text-red-500 font-extrabold text-5xl text-center mb-5 mt-5'>Password Generator</h1>

      <div className='flex'>
        <input type="text" className='w-72 h-10 rounded-md mb-5'
        value={Password}
        readOnly
        />
        <button onClick={() => Window.clipboard.writeText(Password)} className='bg-green-500 w-28 ml-2 rounded-md mb-5'>Copy</button>
      </div>

      <div className='flex'>

        <div className='flex items-center mb-3'>
          <input type="range" 
          min={8}
          max={24}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setlength(e.target.value)}
          
          name="" id="" />
          <label className='text-white ml-1 font-bold' htmlFor="length">Length: {length}</label>
        </div>
      </div>

      <div className='flex'>
        <input type="checkbox"
        defaultChecked={noAllowed}
        onChange={() => setnoAllowed(!noAllowed)}
        
        name="" id="" className='w-5 h-5'/>
        <label className='text-white ml-1 font-bold' htmlFor="number">Numbers</label>

        <input type="checkbox"
        defaultChecked={charAllowed}
        onChange={() => setcharAllowed(!charAllowed)}
        
        name="" id="" className='w-5 h-5 ml-5'/>
        <label className='text-white ml-1 font-bold' htmlFor="char">Characters</label>

      </div>

    </div>
  )
}

export default App
