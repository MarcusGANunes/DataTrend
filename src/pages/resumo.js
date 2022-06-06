import React from 'react';
import { useState } from 'react';
import '../styles/resumo.modules.css';
import ResumeCard from '../components/resumeCard/index.js';
import PieChartWeekly from '../components/pieChartWeekly/index.js';
import PieChartDaily from '../components/pieChartDaily/index.js';
import Histogram from '../components/histogram/index.js';

export default function NFTs() {
  const [portfolio, setPortfolio] = useState([ {
    cnpj: 36583766000193,
    name: "2W COMERCIALIZADORA VAREJISTA DE ENERGIA S.A.",
    date: 44440,
    price: 62.7114434280476,
    city: "SÃO PAULO"
   },
   {
    cnpj: 29000095000125,
    name: "TEMPO ENERGIA S.A.",
    date: 44501,
    price: 79.21806047216984,
    city: "SÃO PAULO"
   },
   {
    cnpj: 29754467000109,
    name: "CEL COMERCIALIZADORA DE ENERGIA - EIRELI",
    date: 44531,
    price: 73.72282854090759,
    city: "GOIANIA"
   } ]);

  return (
    <div className='page'>
      <div className="title">
        <h1>Resumo</h1>
      </div>
      <div className='texts'>
        <div>
            <ResumeCard/>
        </div>
        <br/>
        <div className='containerResumo'>
            <PieChartWeekly/>
            <PieChartDaily/>
        </div>
        <div>
            <Histogram/>
        </div>
        <div>
          <h2>Seu Portfolio</h2>
          {portfolio.map((x) =>{
            return(
              <ol>
              <li>{x.name}</li>
            </ol>
            );
          })}
        </div>
      </div>
    </div>
  );
}