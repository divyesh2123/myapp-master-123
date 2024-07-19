import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, Inc } from './actions/counterAction';

export default function Counter() {

  const dis = useDispatch();
  const abc = ()=>{

    dis(Inc())
  }

  const abcd = ()=>{

    dis(dec())
  }

  const counter = useSelector(y=>y.counter);


  return (
    <div>{counter}
    
      <button onClick={abc}>+</button>
      <button onClick={abcd}>-</button>
    </div>
  )
}
