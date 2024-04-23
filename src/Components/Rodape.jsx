import '../Styles/Rodape.css'
import Logo from '../Imagens/Logo.png'

function Rodape(){
    return(
        <footer className="corpo_rodape">
          <section className="logo_rodape">
              <img src={Logo} alt="logo" />
          </section>
          <section className="info">
            <h6>Silvestre Lanchonete</h6>
            <p id="cardapio">Cardápio</p>
            <p id="direitos">Software  2024 - Todos os direitos reservados.</p>
          </section>
        </footer>

    )
}
export default Rodape