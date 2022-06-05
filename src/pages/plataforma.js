import React from "react";
import "../styles/plataforma.modules.css";

export default function Plataforma() {
  return (
    <div className="plataforma">
      <div className="title">
        <h1>A Plataforma</h1>
      </div>
      <div className="texts">
        <p>
          A conecta é uma plataforma que dá acesso as pessoas físicas ao mercado
          livre de energia, ou ambiente de contratação livre, além disso também
          fazemos financiamento em grupo para projetos de geração distribuída de
          energia solar trazendo a possibilidade dos consumidores se tornarem
          produtores de parte da sua energia.
        </p>
        <p>
          Conectamos a pessoa física a mercados que antes estavam restritos as
          grandes empresas, trazendo as ferramentas necessárias para guiar os
          consumidores neste novo mercado, calculando o consumo e a conta de
          energia.{" "}
        </p>
        <p>
          Com isso fazendo com que o consumidor se torne o protagonista em um
          futuro mais sustentável e conectado.
        </p>
      </div>
      <div className="subtitle">
        <h2>Comercializadoras</h2>
      </div>
      <div className="grid-container">
        <div className="infoTexts">
          <p>
            No mercado livre, ou ambiente de contratação livre o Consumidor pode
            negociar através de uma comercializadora diretamente com a geradora,
            obtendo assim uma energia mais barata e que se adequa as suas
            necessidades e preferências.
          </p>
          <p>Você vai pagar duas contas de energia:</p>
          <ul>
            <li>
              Uma para a geradora de quem está sendo contratada a energia.
            </li>
            <li>
              Outra para a distribuidora que leva a energia que foi contratada
              até sua residência.
            </li>
          </ul>
          <p>
            A energia se torna mais barata porque as negociações são feitas em
            um ambiente de mercado, no qual consumidor tem o poder de escolher
            onde comprar a energia para que se adeque as suas necessidades.
          </p>
          <p>
            Como você agora tem o poder de escolha pode ajudar a tornar a matriz
            energética do país mais sustentável montando sua própria carteira de
            energia e calculando seu consumo, tudo pelo nosso app.
          </p>
        </div>
        <img className="image" src="figuras-de-lgg1.png"></img>
      </div>
      <div className="subtitle">
        <h2>Crowdfunding</h2>
      </div>
      <div className="grid-container">
        <div className="infoTexts">
          <p>
            Além de escolher os comercializadores de energia no nosso site, você
            pode se tornar um investidor em uma rede solar de geração
            distribuída.
          </p>
          <p>
            Basta colocar a sua localização e selecionar o projeto que gostaria
            de investir dentro do seu estado para se tornar um investidor em
            energia solar e produzir uma parte da energia que você consome.
          </p>
          <p>
            Você comprará uma participação em um projeto financiado em grupo, ou
            seja, Crowdfunding. No nosso site você encontra todas as informações
            relevantes para o investimento como fluxo de caixa e previsão de
            rentabilidade do projeto, além de montar seu portfólio.
          </p>
          <p>
            Venha investir conosco em um futuro mais sustentável e conectado.
          </p>
        </div>
        <img className="image" src="figuras-de-lgg1.png"></img>
      </div>
    </div>
  );
}
