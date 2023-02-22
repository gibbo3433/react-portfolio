import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function MakeCard() {

    return (
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

// function RenderCard(card, index) {
//   return (
//     <Card key={index}>
//       <Card.Img variant="top" src={card.image} />
//       <Card.Body>
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>
//          {card.text}
//         </Card.Text>
//         <Button href={card.gitHub} className="card-button" variant="primary">Visit Repo</Button>
//       </Card.Body>
//     </Card>
//   );
// }
// return <div className="grid">{cardInfo.map(RenderCard)}</div>;

// }