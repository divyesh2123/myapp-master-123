import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const EDisplay = ({title,img,des}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
        {data.des}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}
