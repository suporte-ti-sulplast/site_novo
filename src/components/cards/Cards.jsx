import "./index.scss";

function Cards() {
  return (

    <div className='Cards'>


        <div className="card">
            <div>
                <h1>Automotivo</h1>
                <p>Com forte atuação neste setor, especialmente no segmento de caminhões e veículos especiais, as peças automotivas Sulplast possuem elevado desempenho e atendem as exigências das principais montadoras do mundo.</p>
            
            </div>
            <div>
                <img src="./images/setor-automotivo-3.jpg" alt="setor-automotivo" />
            </div>
        </div>
        <div className="card">
            <div>
                <img src="./images/setor-agricola.jpg" alt="setor-agricola" />
            </div>
            <div>
                <h1>Agrícola</h1>
                <p>Fornecedora de soluções plásticas para os principais fabricantes de máquinas e implementos agrícolas presentes no mercado, a Sulplast contribui para a expansão do agronegócio e aumento da produção de alimentos ao redor do planeta.</p>
            </div>
        </div>
        <div className="card">
            <div>
                <h1>Construção e Mineração</h1>
                <p>A Sulplast também fornece componentes de alta qualidade para os principais fabricantes de máquinas e implementos para construção civil e mineração, contribuindo em obras de infraestrutura e na extração de recursos naturais.</p>
            </div>
            <div>
                <img src="./images/setor-civil.jpg" alt="setor-civil" />
            </div>
        </div>
        <div className="card">
            <div>
                <img src="./images/diversos-setores-da-economia.jpg" alt="diversos-setores-da-economia" />
            </div>
            <div>
                <h1>Diversos Setores da Economia</h1>
                <p>A estrutura e o conhecimento técnico da Sulplast tornam a empresa capaz de desenvolver soluções plásticas eficientes para todos os setores da economia, com a excelência que destaca nossos produtos e processos.</p>
            </div>
        </div>
        
    </div>
  )
};
export default Cards;