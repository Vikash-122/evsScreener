import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

export default function Cards() {
  return (
    <Card style={{
      width: '190rem',
       height: '16rem',
      borderRadius: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '6px'
    }}>
      <Card.Body>
        {/* First Bold Title */}
        <Card.Title>
          <h4 style={{ fontWeight: 'bold', color: '#371264', marginBottom: '10px' }}>
            Own the Entire Index Journey
          </h4>
        </Card.Title>

        {/* First Paragraph */}
        <Card.Text style={{ fontSize: '1rem', color: '#333', lineHeight: '1.4', marginBottom: '15px' }}>
          From rebalancing and reconstitution to advanced index analytics, centralized monitoring, and effortless publication—we deliver a seamless, end-to-end lifecycle management experience that ensures precision, transparency, and speed.
        </Card.Text>


      </Card.Body>
    </Card>
  );
}