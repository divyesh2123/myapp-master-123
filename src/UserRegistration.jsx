import React, { useContext } from 'react'
import LangContext from './Context/UserContext'

export default function UserRegistration() {

    const {lan}  = useContext(LangContext);

    const info = {
        "en" : {
            "firstName": "firstName",
            "lastName":"lastName"
        },
        "hi": {
            "firstName": "pehla name",
            "lastName": "antim name"
        }
        
    }
  return (
    <div>
            <label>

                {info[lan].firstName}
            </label>

            <input type='text' />

            <label>

{info[lan].firstName}
</label>

<input type='text' />

{info[lan].lastName}

    </div>
  )
}
