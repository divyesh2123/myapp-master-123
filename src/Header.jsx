import React, { useContext } from 'react'
import LangContext from './Context/UserContext'

export default function Header() {

   const {setlan}= useContext(LangContext);
  return (
    <select onChange={(e)=>{

        setlan(e.target.value);

    }}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
    </select>
  )
}
