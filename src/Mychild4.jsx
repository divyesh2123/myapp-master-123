import React from 'react'

export default function Mychild4(props) {

  console.log(props);
  return (
    <div>{props.data.firstName}</div>
  )
}
