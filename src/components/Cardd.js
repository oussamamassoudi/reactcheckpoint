import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardd() {
  return (
    
        <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/236x/63/2f/bd/632fbd20f18a2a1bc6df569b31eda210.jpg"style={{ width: '18rem', height:'30rem'}} />
      <Card.Body>
        <Card.Title>Sun Flower</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardd