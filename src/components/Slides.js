import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

export default function Slides() {
  return (
    <Carousel className="sildeshow">
      <Carousel.Item>
        <div className="slide-img">
          <div className="slide-text">

            <h3>Future-Driven Index Technology</h3>
            <p>Driving innovation for financial institutions through intelligent index creation, cross-asset computations, and future-ready tech</p>
        </div>
        </div>
        <Carousel.Caption>
          <h3 style={{marginTop: "-70px"}}>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

