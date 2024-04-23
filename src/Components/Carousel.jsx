import ViradoPaulista from '../Imagens/Virado à Paulista.png'; 
import BifeRole from '../Imagens/Bife à Role.png';   
import Feijoada from '../Imagens/feijoada.png';  
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
      </Carousel.Item>
      <Carousel.Item>
        <img className="img_carousel" src={BifeRole} text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img_carousel" src={Feijoada} text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;