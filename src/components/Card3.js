import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3() {
  return (
    <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/236x/71/e1/33/71e1335154c806d4a18d15cb70e7cd94.jpg" style={{ width: '18rem', height:'30rem'}}/>
    <Card.Body>
      <Card.Title>New York City</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Card3