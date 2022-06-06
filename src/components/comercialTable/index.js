import "bootstrap";
import { useState, useEffect } from "react";
import "./comercialTable.modules.css";
import empresas from '../../data/businesses-data'

let id = 1
empresas.forEach(e => {
  e.show = true
  e.id = id
  id = id + 1;
})

export default function ComercialTable() {
  const [traders, setTraders] = useState(empresas);

 
  function addRemoveBusiness(newElement) {
    const newTraders = traders.map(x => {
      return x.id === newElement.id ? {...x, chosen: !x.chosen} : x;
    });
    setTraders(newTraders);
  }

  return (
    <table class="table table-striped table-hover align-middle">
      <thead>
        <tr id="option">
          <th scope="col">ID</th>
          <th scope="col">CNPJ</th>
          <th scope="col">Razão Social</th>
          <th scope="col">Cidade</th>
          <th scope="col">Preço (MWh)</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {traders.map((x) => {
          return (
            <tr id="option">
              <th scope="row" id={x.id}>
                {x.id}
              </th>
              <td id="texts">{x.cnpj}</td>
              <td id="texts">{x.name}</td>
              <td id="texts">{x.city}</td>
              <td id="texts">R${x.price.toFixed(2)}</td>
              <td id="texts"><span id={x.chosen === true ? 'button-selected' : 'button-unselected'} onClick={() => {addRemoveBusiness(x)}} type="button">Adicionar/Remover</span></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}