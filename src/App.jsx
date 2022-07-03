//App.jsx
import './App.css'
  
            const informacoes =[
        {a:"1",b:"Funcinária que dencuniou procurador diz que agressor 'despresava mulheres' e teme  sair na rua:'Muito medo'"},
        {a:"2",b:"Imposto de Renda 2022: Receita abre consultas ao 2º lote de restituição nesta  quinta; veja se você está no grupo"},
        {a:"3",b:"Governo opera pra evitar CPI do MEC, que ganhou força após prisão prisão de Milton Ribeiro"},
        {a:"4",b:"Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal;ficam feridos"},
        {a:"4",b:"Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal;7 ficam feridos"},
        {a:"5",b:"Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é dono dessa chalana?'"}
      ]

function App(){

return(
 //bloco   
    <div className='container'>
        <h1 className='titulo'>Mais lidas</h1>
            
      {informacoes.map((noticias)=><p className='noticia'>
           <div className='numero'>
            {noticias.a}
            </div>
            {noticias.b} </p> )}


    </div>
)
}
export default App;