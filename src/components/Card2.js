import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/236x/f7/70/22/f7702293625f7788f0c01f2db9950005.jpg" style={{ width: '18rem', height:'30rem'}}/>
    <Card.Body>
      <Card.Title>BMW M-Power</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Card2