import "./index.scss";

function About() {
    return (
  
      <div className='About'>

        <div className="about_sup">

          <div>

            <h1>Sulplast</h1>

            <p>Há mais de 40 anos no mercado, a Sulplast é uma empresa especializada no
            desenvolvimento e fabricação de peças técnicas em termoplástico e fibra de
            vidro. Capaz de atender aos mais rigorosos padrões de qualidade e segurança, a
            Sulplast possui expertise nos processos de Vacuum Forming, Rotomoldagem,
            Injeção, RTM Light, RTM Skin, Hand Lay Up e Pintura Classe A.</p>
          </div>

          <div>
            <img src="./images/sulplast-circulo.png" alt="sulplast-circulo" />
          </div>
          

        </div>

        <div className="bottom">
        
          <button className="btn">SOBRE A SULPLAST</button>  

          <img src="./images/q1.png" alt="q1" />
          <img src="./images/selo-vda-63.png" alt="selo-vda-63" />
          <img src="./images/selo-iso9001.png" alt="selo-iso9001" />
          <img src="./images/selo-iso14001.png" alt="selo-iso14001" />
          <img src="./images/selo-iatf16949.png" alt="selo-iatf16949" />

        </div>
      
      </div>
    )
  };
  
  export default About;