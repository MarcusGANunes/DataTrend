import React from 'react';
import { useState } from 'react';
import '../styles/resumo.modules.css';
import ResumeCard from '../components/resumeCard/index.js';
import PieChartWeekly from '../components/pieChartWeekly/index.js';
import PieChartDaily from '../components/pieChartDaily/index.js';
import Histogram from '../components/histogram/index.js';

export default function NFTs() {
  const [portfolio, setPortfolio] = useState([ {id: 3, name: 'nome', city: 'cidade'} ]);

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
        <div>
            <PieChartWeekly/>
        </div>
        <br/>
        <div>
            <PieChartDaily/>
        </div>
        <br/>
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