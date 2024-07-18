import React, { useState } from 'react'
import MyChildData from './MyChild';




export default function MyParet() {

    const [data,setData]= useState([]);
    const [input,setInput]= useState('')

    const o= ()=>{

        let p = [...data];
        p.push(input);
        setData(p);

    }

    const removeElement = React.useCallback (()=>{

    },[]);
  return (
    <div>
        
        <input type='text' name="abc" value={input} onChange={(e)=>{

                 setInput(e.target.value);
        }}/>
        <button onClick={o}>Save</button>

       <MyChildData data={data} r={removeElement}/>
    </div>
  )
}
