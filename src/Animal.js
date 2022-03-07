import React, { createContext,useState } from 'react'
import Human from './Human';
const Number =createContext(); 
function Animal() {
    const [name, setName] = useState('Faizan')
   
  return (
     <>
      <Number.Provider value={4}>
           <h1> Hello het</h1>
           <Human/>
      </Number.Provider>
    
     </>
      
  )
}

export default Animal ;
export {Number}