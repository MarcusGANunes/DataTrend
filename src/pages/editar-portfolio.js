import React from "react";
import ComercialTable from "../components/comercialTable/index.js";
import Button from '../components/button/index.js'

export default function EditarPortfolio() {
  return (
    <div className="page">
      <div className="title">
        <h1>Editar Portfolio</h1>
      </div>
      <div className="texts">
        <div>
          <ComercialTable />
        </div>
        <Button/>
      </div>
    </div>
  );
}
