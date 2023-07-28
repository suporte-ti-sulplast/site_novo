import "./index.scss";

function Header() {
  return (

    <div className='Header'>

      <img src="./images/logotipo-sulplast.png" alt="logo_Sulplast" />
      <div className="Dados">
        <p><i class="fa-solid fa-phone-flip"></i>Tel.: +55 (19) <strong>3535-6550</strong></p>
        <p><i class="fa-solid fa-envelope"></i>E-mail: <strong>sulplast@sulplast.com.br</strong></p>
        <p><i class="fa-solid fa-location-dot"></i>Av. Sulplast, 1969 - Distrito Industrial - Rio Claro/SP - Brasil - 13505-680</p>
      </div>
        
    </div>
  )
};

export default Header;