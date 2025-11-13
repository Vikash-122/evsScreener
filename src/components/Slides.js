import "bootstrap/dist/css/bootstrap.css";
// import building from "./images/building.webp";
import building from "./images/investing_facts_cover.jfif";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

export default function Slides() {
  return (
    <Carousel className="sildeshow">
      <Carousel.Item>
        <img src ={building} alt = "..." className="slide-img"/>
        <Carousel.Caption>
          <h3 style={{marginTop: "-70px"}}>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

