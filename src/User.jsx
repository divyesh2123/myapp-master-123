import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Request, UserFail, UserSuc } from './actions/userAction';
import { getUser } from './asycactions/userAsyncAction';

export default function User() {

    const data= useSelector(y=>y.user);

    const dis = useDispatch();

    console.log(data);

    useEffect(()=>{
        dis(getUser())

      
    },[])


  return (
    <div>User</div>
  )
}
