import React from 'react'
import { useState } from 'react'
import Mychild1 from './Mychild1'

export default function MyData() {

    const [data,setData] = useState({
        firstName : "Test",
        lastName: "Test1" 
    })
  return (
    <Mychild1 data1={data}></Mychild1>
  )
}
