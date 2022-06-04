import React from 'react';
import '../styles/resumo.modules.css';
import ResumeCard from '../components/resumeCard/index.js';
import PieChartWeekly from '../components/pieChartWeekly/index.js';
import PieChartDaily from '../components/pieChartDaily/index.js';

export default function NFTs() {
  return (
    <div className='NFTs'>
      <div className="title">
        <h1>NFTs</h1>
      </div>
      <div className="texts">
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
      </div>
    </div>
  );
}