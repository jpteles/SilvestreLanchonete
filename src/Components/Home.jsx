import '../Styles/Home.css';
import Banner from '../Imagens/banner_silvestre.png';
import Banner_Cel from '../Imagens/banner_silvestre_cel.png';
import Carousel from '../Components/Carousel';
import Rodape from '../Components/Rodape';
import Contato_Local from './Contato_Local';

function Home() {
  return (
    <section className="Home">
        <div className="AreaBanner">
            <img className="img_banner" src={Banner} alt="Banner" />
            <img className="img_banner_cel" src={Banner_Cel} alt="Banner_cel" />
        </div>
        <div className="Carrossel">
            <h1 className="Destaques">Destaques da Semana</h1>
                <div className="section-carousel">
                    <Carousel />
                </div>
        </div>
        <div className="Contato_Local">
        <Contato_Local />
        </div>
        <footer className="Rodape">
          <Rodape />
        </footer>
    </section>
  );
}

export default Home;