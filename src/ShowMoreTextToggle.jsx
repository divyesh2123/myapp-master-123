import React from 'react'

export default function ShowMoreTextToggle({text}) {

    const [showMore, setShowMore] = React.useState(false);

    const value = React.useMemo(()=>{
        console.log("this is the calculating");
        return text.slice(0, 30).concat('...');
    },[text])

    const handleShow = ()=>{
        setShowMore(!showMore);
    }

    const myData =() => {
       
        
      }


  return (
    <div onClick={handleShow}>{showMore ? text: value }</div>
  )
}
