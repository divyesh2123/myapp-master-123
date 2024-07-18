import React from 'react'

 function MyChildData(props) {

  console.log("s")
  return (
    <div>MyChild</div>
  )
}

export default React.memo(MyChildData);
