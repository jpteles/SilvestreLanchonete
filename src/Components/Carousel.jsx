import ViradoPaulista from '../Imagens/virado-a-paulista.jpg'; 
import BifeRole from '../Imagens/bife-a-role2.jpg';   
import Feijoada from '../Imagens/feijoada2.jpg';  
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="img_carousel"  src={ViradoPaulista} text="First slide" />
        <Carousel.Caption>
          {/* <h3>Virado à Paulista</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img_carousel" src={BifeRole} text="Second slide" />
        <Carousel.Caption>
          {/* <h3>Bife a Rolê</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img_carousel" src={Feijoada} text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Feijoada</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;