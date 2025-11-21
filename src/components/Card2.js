import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

export default function Card1() {
  return (
    <Card
      className="blur-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '200rem', // Adjust width as needed
        height: '16rem',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* Background layer */}
      <div
        style={{
          backgroundImage: 'url("/Card3.jpg")', // ✅ Image from public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)', // Blur effect
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      ></div>

      {/* Overlay for better text visibility */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      ></div>

      {/* Text content */}
      <Card.Body
        style={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          padding: '20px',
        }}
      >
        <Card.Title>
          <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            AI Fusion: Redefining the Indexing Experience
          </h4>
        </Card.Title>
        <Card.Text style={{ fontSize: '1rem', lineHeight: '1.7' }}>
          Harness the power of Artificial Intelligence to transform every stage of your indexing lifecycle. Our AI-driven approach doesn’t just automate—it elevates.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}