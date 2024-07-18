import React from 'react'
import { useRef } from 'react'

export default function MyTY() {

    const ref=useRef();

    const hanldeChange= ()=>{

       
    }

    const save = ()=>{

    
        console.log(ref.current.value);
    }

   


  return (
    <div>
        <input type='text' ref={ref} onChange={hanldeChange} />
        <input type='button'  value="sAVE" onClick={save}/>
    </div>
  )
}
