import '../Styles/Home.css';
import Banner from '../Imagens/banner_silvestre.png';
import Banner_Cel from '../Imagens/banner_silvestre_cel.png';
import Carousel from '../Components/Carousel';
import Rodape from '../Components/Rodape';

function Home() {
  return (
    <div className="Home">
        <div className="AreaBanner">
            <img className="img_banner" src={Banner} alt="Banner" />
            <img className="img_banner_cel" src={Banner_Cel} alt="Banner_cel" />
        </div>
        <div className="Carrossel">
            <h1 className="Destaques">Destaques do dia</h1>
                <div className="section-carousel">
                    <Carousel />
                </div>
        </div>
        <footer className="Rodape">
          <Rodape />
        </footer>
    </div>
  );
}

export default Home;

