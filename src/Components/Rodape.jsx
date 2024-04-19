import '../Styles/Rodape.css'
import Logo from '../Imagens/logo.png'

function Rodape(){
    return(
        <footer className="corpo_rodape">
          <section className="logo_rodape">
              <img src={Logo} alt="logo" />
          </section>
          <section className="info">
            <h6>Silvestre Lanchonete</h6>
            <p id="cardapio">Cardápio</p>
            <br />
            <p>Software  2024 - Todos os direitos reservados.</p>
          </section>
        </footer>

    )
}
export default Rodape