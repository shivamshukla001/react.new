import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
   let [Counter, setCounter]=useState(1)


  
   const addValue=()=>{
   
   setCounter(Counter+1);

    
   }

   const removeValue=()=>{
  
      setCounter(Counter-1);
   
   }

     
  return (
    <>
         <h1>coding with shivam</h1>
          <h2>counter value: {Counter}</h2>
          
          <button
          onClick={addValue}>Add value</button>
          <button
          onClick={removeValue}>remove value</button>

          </>
  )
}

export default App
