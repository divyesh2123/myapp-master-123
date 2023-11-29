import React, { useState } from 'react'

export default function DataManagement() {
   const [data,setData]= useState({
        firstName : "",
        lastName : ""
    });

    const [index,setIndex] = useState(-1);

    const [multileData,setMultipleData] = useState([]);

    const changeValue = (e)=>{

        setData({...data,[e.target.name]: e.target.value})
    }

    const saveInfo = (e)=>{
        e.preventDefault();

        let p = [...multileData];

        if(index == -1)
        {
        p.push(data);
        }
        else
        {
            p[index] = data;
        }

        setIndex(-1);
        setMultipleData(p);

    }

    const deleteInfo = (index)=>{

        let p = [...multileData];

        p.splice(index,1);

        setMultipleData(p);
        

    }

    const editInfo = (index)=>{

        let o = multileData[index];

        setData({...o});
        setIndex(index);

    }


  return (
    <div>

        <form onSubmit={saveInfo}>

            <input type='text' name="firstName" onChange={changeValue}
             value={data.firstName} />
            <input type='text' name="lastName" onChange={changeValue} 
            value={data.lastName} />

            <input type='submit' value="Save"/>

        </form>
        <table>

        {

multileData.map((v,index)=>{

    return(<tr><td>{v.firstName}</td><td>{v.lastName}</td>

            <td><button onClick={()=>{
                deleteInfo(index)

            }}>Delete</button></td>

            
<td><button onClick={()=>{
                editInfo(index)

            }}>edit</button></td>
    
    </tr>)

})

}
        </table>
       
        
    </div>
  )
}