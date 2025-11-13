import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

export default function Cards({title, image}) {
  return (
    <Card style={{ width: '30rem', height: '20rem', borderRadius: '30px'}}>
      <Card.Body>
      {
        image && 
          <img src={image} alt="..." style={{overflow: 'hidden', height: '44%', width: '100%'}}/>
      }
        <Card.Title><h3>{title}</h3></Card.Title>
        <Card.Text>
          <b>Find out more→</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}