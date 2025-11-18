import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

export default function Cards({title, text, page, setPage}) {
  return (
    <Card style={{
      width: '480px',
       height: '150px',
      borderRadius: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '6px'
    }}>
      <Card.Body>
        {/* First Bold Title */}
        <Card.Title onClick={()=>setPage(title)} style={{ cursor: 'pointer' }}>
          <h4 style={{ fontWeight: 'bold', color: '#371264', marginBottom: '10px' }}>
            {title}
  
          </h4>
        </Card.Title>

        {/* First Paragraph */}
        <Card.Text style={{ fontSize: '1rem', color: '#333', lineHeight: '1.4', marginBottom: '15px' }}>
          {text}
        </Card.Text>


      </Card.Body>
    </Card>
  );
}
