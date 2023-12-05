import axios from 'axios';
import React, { useEffect, useState } from 'react'
import fetchauth from './axios/customaxios';
import authfetchI from './axios/interseptor';

export default function ListAccounts() {

    const [data,setData]= useState([]);

    let d = JSON.parse(localStorage.getItem("token"));

    useEffect(()=>{

      authfetchI.get("/accounts").then(y=> {
            console.log(y.data)
        }).catch(u=>{

            console.log(u);
        })

    },[])
  return (
    <div>ListAccounts</div>
  )
}
