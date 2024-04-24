import '../Styles/Contato_Local.css'
import whats from '../Imagens/whats.png'
import insta from '../Imagens/insta.png'

function Contato_Local(){
    return(
        <section className="Sec-Pai">
          <div className="Contato">
              <h3>Venha nos visitar!</h3>
              <p>Endereço: R. Rishin Matsuda, 508 - Vila Santa Catarina
                <br />
                 CEP: 04371-000
                 <br />
                 São Paulo - SP
                 <br />
                 <br />
                 <br />
                 Cel: (11) 97746-8366
                 <br />
                 silvestrelanchonetehamburgueria@gmail.com
                 </p>
                 <div className="Botoes">
                    <a href='https://wa.me/5511977468366'><button className="Whatsapp" type="button"> <img src={whats} /> </button> </a>
                    <a href='https://www.instagram.com/silvestre_lanchonete?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><button className="Insta" type="button"> <img src={insta} /> </button> </a>
                 </div>
          </div>
          
          <div className="Local">
          <iframe
          title="Meu Iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.766356433943!2d-46.6587291!3d-23.648536999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc79c46996b%3A0x3d9bcb8e22665dc2!2sSilvestre%20Lanchonete%20e%20Hambugueria!5e0!3m2!1spt-BR!2sbr!4v1713741921956!5m2!1spt-BR!2sbr"
          width="100%"
          height="600"
          frameborder="0">
          </iframe>
          </div>
        </section>

    )
}
export default Contato_Local