import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { EDisplay } from './EDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export const Ecommerce = () => {

   const [data,setData]= useState([])
   console.log(data);

    useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")
    .then(y=>{

        setData(y.data);
        
    }).catch(y=>{
        console.log(y);
    })

    },[])
  return (
    <Container>
       <Row >
      {
        data.map((v)=>{


            return ( <EDisplay title={v.title} des={v.description} img={v.image}/>)


        })

      

      }
      </Row>

    </Container>
  )
}
