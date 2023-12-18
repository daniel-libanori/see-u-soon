import './App.css';
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from 'react';

import doge from './assets/memedoge.jpg'
import sad from './assets/sad.jpeg'
import buss from './assets/buss.webp'
import cat from './assets/cat.jpeg'
import confia from './assets/confia.jpeg'
import duckdance from './assets/duckdance.gif'
import lobisomem from './assets/lobisomem.jpeg'
import lonely from './assets/lonely.jpeg'
import spongebob from './assets/spongebob.jpeg'

function App() {

  function calculateDateDifference() {
    let date1 = new Date();
    let date2 = new Date("01/14/2024");

    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days =
      Math.round(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days + 1;

  }

  function calculateDateDifferencePercent() {
    let date0 = new Date("12/17/2023");
    let date1 = new Date();
    let date2 = new Date("01/14/2024");

    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Time2 = date2.getTime() - date0.getTime();
    let Difference_In_Time3 = date1.getTime() - date0.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days =
      Math.round(Difference_In_Time / (1000 * 3600 * 24));
    let Difference_In_Days2 =
      Math.round(Difference_In_Time2 / (1000 * 3600 * 24));
    let Difference_In_Days3 =
      Math.round(Difference_In_Time3 / (1000 * 3600 * 24));

    return ((Difference_In_Days3 / Difference_In_Days2) * 100)


  }

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const mensagens = [
    "Estou+com+saudades",
    "Como+está+o+tempo+por+aí?",
    "Como+está+sendo+o+seu+dia?",
    "Olha+essa+foto+do+meu+cachorro:",
    "Pense+em+mim+chore+por+mim,+ligua+pra+mim,+não+não+liga+pra+ele",
    "Prometo+nunca+comer+o+xis+doce+do+Gulosão",
    "Olha+o+meu+look+de+hoje:",
  ]

  const curisidadesMinhas = [//26
    "Minha cor favorita é laranja.",
    "Já quis ser fotógrafo de paisagens.",
    "Sou Leonino, ascendente em Escorpião e lua em Touro.",
    "Coleciono Bonés, principalmente de Futebol Americano",
    "A família do meu pai é de Cosmópolis.",
    "Sou formado como Técnico em Eletroeletrônica no SENAI.",
    "A ultima que saí no soco foi na segunda série do fundamental.",
    "Minha comida favorita é Brócolis.",
    "Meu super-herói favorito na infância era o Homem-Aranha.",
    "Já fui de igreja na minha adolescência (sad reactions only).",
    "Já fiz parte do PET-SI na faculdade.",
    "A empresa que eu trabalho funciona pelo Discord (hihihi).",
    "Já fui no show do Humberto Gessinger, Duca Leindecker, Lenine e Capital Inicial.",
    "Tenho um gosto aleatório por fones de ouvido (nem eu entendo kkkkk).",
    "Não acompanho muito futebol, mas aqui no RS adotei o Grêmio.",
    "Gosto de presentear ou fazer surpresas para as pessoas que eu gosto.",
    "Mesmo gostando de academia, acho fisiculturismo bem cringe.",
    "Prefiro mil vezes morar numa casa do que em um apartamento.",//18
    "A única comida que não consigo comer de maneira alguma é feijão carioca.",
    "Eu não consigo jogar nenhum jogo competitivo, sou horrível em todos (kkkkkkk).",
    "Adoro tomar um cafézinho com um pedaço de bolo.",
    "Meu filme favorito é Whiplash, em busca da perfeição.",
    "Antes de entrar na faculdade trabalhei e fiz cursinho por uns 3 anos.",
    "Em Campinas me considero Ponte Pretano.",
    "Já fiz um site pra NBA quando trabalhava numa empresa de Pelotas.",
    "Já fui para Madrid, na época da igreja (parcelei tudo em 1000 vezes no cartão).",//26
    "Eu amo aquelas uvas verdes sem caroço!",
    "Eu sempre tenho um quadro branco no meu quarto, pra anotar qualquer maluquice que me venha na mente.",
    "Quando eu estava no fundamental queria ser escritor de mangás.",
    "Os stories de academia eram apenas no meu Close Friends, mas deixei públicos, pq teve um pessoal que começou a treinar por minha causa.",
  ]


  const images = [
    doge,buss,
    sad, cat, confia, duckdance, lobisomem, lonely, spongebob
  ];

  function Slideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((previousIndex) => (previousIndex + 1) % images.length);
      }, 2500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div style={{zIndex: 1, position: 'absolute', 
        width: 300, top: "50vh", left: '50vw', transform:"translate(-50%, -50%)"}}>
        <img src={images[currentImageIndex]} alt="" style={{height:'inherit', width:"inherit"}}/>
      </div>
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./assets/heartbackground.png")}
          style={{ width: 'inherit', height: 'inherit', position: 'fixed', maxWidth: 500, zIndex: 2 }} />
<Slideshow />
        <div style={{
          width: "100%", maxWidth: 500, height: "100vh", zIndex: 3,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
      

          <img src={require("./assets/title.png")} style={{ maxWidth: 300, marginTop: -40 }} />

          <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", marginBottom: 100 }}>
            <h4 style={{ fontSize: 16 }}>Todo dia uma curiosidade minha diferente:</h4>
            <div style={{ padding: "10px 20px", backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 100 }}>
              <p style={{ fontSize: 14, margin: 0, width: 200 }}>{curisidadesMinhas[28 - calculateDateDifference()]}</p>
            </div>

          </div>




          <h4 style={{ fontSize: 20, marginBottom: 10, marginTop: 100 }}>
            Volto para Santa Maria em {calculateDateDifference()} dia{"s"}
          </h4>


          <div style={{ width: "85%", height: 20, backgroundColor: 'white', borderRadius: 20, padding: 5 }}>
            <div style={{ width: `${calculateDateDifferencePercent()}%`, backgroundColor: 'red', height: '100%', borderRadius: 20 }}></div>
          </div>


          <h4 style={{ fontSize: 15, margin: 0, width: 150, marginTop: 50 }}>
            Clica aqui
          </h4>

          <div>
            <a href={"https://wa.me/5548984462132?text=" + getRandomElement(mensagens)} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ width: 50, height: 50, color: '#00FF00' }} />
            </a>
          </div>

          <h4 style={{ fontSize: 15, margin: 0, width: 200 }}>
            para gente conversar
          </h4>
          <p style={{ fontSize: 12, margin: 0, width: 200 }}>A mensagem é aleatória <br />(ou será que não?)</p>

        </div>

      </header>
    </div>
  );

}

export default App;
