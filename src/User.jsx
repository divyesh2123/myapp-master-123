import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Request, UserFail, UserSuc } from './actions/userAction';

export default function User() {

    const data= useSelector(y=>y.user);

    const dis = useDispatch();

    console.log(data);

    useEffect(()=>{
        dis(Request())

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            dis(UserSuc(y))
        }).catch(y=>{
            dis(UserFail(y))
        })

    },[])


  return (
    <div>User</div>
  )
}
