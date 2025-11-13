import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

export default function Cards({title, image}) {
  return (
    <Card style={{ width: '22rem', borderRadius: '30px'}}>
      <Card.Body>
      {
        image && 
          <img src={image} alt="..." className='card-img-custom'/>
      }
        <Card.Title><h3>{title}</h3></Card.Title>
        <Card.Text>
          <b>Find out more→</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
