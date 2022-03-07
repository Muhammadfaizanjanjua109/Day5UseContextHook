import React  from 'react'
import { Number } from './Animal';
function Person() {
  let value=React.useContext(Number);
   console.log(value);
  return (
       <h1>Hello Person {value}</h1>
   
  )
}

export default Person
